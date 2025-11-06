
import React from 'react';
import { Line } from 'react-chartjs-2';

const ErrorRateChart = ({ data }) => {
  const chartData = {
    labels: data.map((d) => new Date(d.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: 'Error Rate',
        data: data.map((d) => d.errorRate),
        fill: false,
        backgroundColor: 'rgb(255, 206, 86)',
        borderColor: 'rgba(255, 206, 86, 0.2)',
      },
    ],
  };

  return <Line data={chartData} />;
};

export default ErrorRateChart;
