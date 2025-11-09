
import React from 'react';
import { Bar } from 'react-chartjs-2';

const TopRoutesChart = ({ data }) => {
  const chartData = {
    labels: Object.keys(data.topRoutes),
    datasets: [
      {
        label: 'Top Routes',
        data: Object.values(data.topRoutes),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default TopRoutesChart;
