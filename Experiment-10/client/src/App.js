import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import ActiveUsersChart from './components/ActiveUsersChart';
import EventsPerSecondChart from './components/EventsPerSecondChart';
import TopRoutesChart from './components/TopRoutesChart';
import ErrorRateChart from './components/ErrorRateChart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const socket = io('http://localhost:3001');

function App() {
  const [data, setData] = useState([]);
  const [topRoutes, setTopRoutes] = useState({});

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    socket.on('data', (newData) => {
      const timestamp = Date.now();
      setData((prevData) => [...prevData.slice(-20), { ...newData, timestamp }]);
      setTopRoutes(newData.topRoutes);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });

    return () => {
      socket.off('connect');
      socket.off('data');
      socket.off('disconnect');
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Real-Time Analytics Dashboard</h1>
        {data.length > 0 ? (
          <div className="charts-container">
            <div className="chart-row">
              <div className="chart-wrapper">
                <ActiveUsersChart data={data} />
              </div>
              <div className="chart-wrapper">
                <EventsPerSecondChart data={data} />
              </div>
            </div>
            <div className="chart-row">
              <div className="chart-wrapper">
                <TopRoutesChart data={{ topRoutes }} />
              </div>
              <div className="chart-wrapper">
                <ErrorRateChart data={data} />
              </div>
            </div>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </header>
    </div>
  );
}

export default App;