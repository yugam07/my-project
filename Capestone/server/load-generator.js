
const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:3001');

ws.on('open', () => {
  console.log('Connected to server');
  setInterval(() => {
    for (let i = 0; i < 10; i++) {
      const event = {
        timestamp: Date.now(),
        userId: `user-${Math.floor(Math.random() * 100)}`,
        route: `/${['home', 'about', 'products', 'contact'][Math.floor(Math.random() * 4)]}`,
        action: ['view', 'click', 'error'][Math.floor(Math.random() * 3)],
      };
      ws.send(JSON.stringify(event));
    }
  }, 2000);
});

ws.on('close', () => {
  console.log('Disconnected from server');
});
