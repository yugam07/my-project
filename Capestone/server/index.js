
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const { MongoClient } = require('mongodb');

const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'analytics';
let db;

MongoClient.connect(mongoUrl, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
  console.log('Connected to MongoDB');
  db = client.db(dbName);
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const eventSchema = {
  type: 'object',
  properties: {
    timestamp: { type: 'number' },
    userId: { type: 'string' },
    route: { type: 'string' },
    action: { type: 'string' },
  },
  required: ['timestamp', 'userId', 'route', 'action'],
};

function validateEvent(event) {
  // Basic validation
  const valid = Object.keys(eventSchema.properties).every((prop) => prop in event);
  return valid;
}

const rollingAggregates = {
  activeUsers: new Set(),
  eventsPerSecond: 0,
  topRoutes: {},
  errorRates: { total: 0, errors: 0 },
};

setInterval(() => {
  // Reset per-second aggregates
  rollingAggregates.eventsPerSecond = 0;
}, 1000);

setInterval(() => {
  // Reset active users every 60 seconds
  rollingAggregates.activeUsers.clear();
}, 60000);

function updateAggregates(event) {
  rollingAggregates.activeUsers.add(event.userId);
  rollingAggregates.eventsPerSecond++;

  if (rollingAggregates.topRoutes[event.route]) {
    rollingAggregates.topRoutes[event.route]++;
  } else {
    rollingAggregates.topRoutes[event.route] = 1;
  }

  if (event.action === 'error') {
    rollingAggregates.errorRates.errors++;
  }
  rollingAggregates.errorRates.total++;
}

function broadcastUpdates() {
  const data = {
    activeUsers: rollingAggregates.activeUsers.size,
    eventsPerSecond: rollingAggregates.eventsPerSecond,
    topRoutes: rollingAggregates.topRoutes,
    errorRate: rollingAggregates.errorRates.total > 0 ? rollingAggregates.errorRates.errors / rollingAggregates.errorRates.total : 0,
  };
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
}

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('message', (message) => {
    try {
      const event = JSON.parse(message);
      if (validateEvent(event)) {
        db.collection('raw_events').insertOne(event);
        updateAggregates(event);
      } else {
        console.log('Invalid event received');
      }
    } catch (e) {
      console.error('Error processing message', e);
    }
  });
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

app.post('/event', (req, res) => {
  const event = req.body;
  if (validateEvent(event)) {
    db.collection('raw_events').insertOne(event);
    updateAggregates(event);
    res.status(200).send('OK');
  } else {
    res.status(400).send('Invalid event');
  }
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

setInterval(broadcastUpdates, 1000);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
