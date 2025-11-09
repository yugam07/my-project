
import React from 'react';
import { Line } from 'react-chartjs-2';

const EventsPerSecondChart = ({ data }) => {
  const chartData = {
    labels: data.map((d) => new Date(d.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: 'Events per Second',
        data: data.map((d) => d.eventsPerSecond),
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
      },
    ],
  };

  return <Line data={chartData} />;
};

export default EventsPerSecondChart;
