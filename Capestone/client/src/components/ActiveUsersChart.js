
import React from 'react';
import { Line } from 'react-chartjs-2';

const ActiveUsersChart = ({ data }) => {
  const chartData = {
    labels: data.map((d) => new Date(d.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: 'Active Users',
        data: data.map((d) => d.activeUsers),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  return <Line data={chartData} />;
};

export default ActiveUsersChart;
