import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  // Pie chart data
  const data = {
    labels: ['Subscriptions', 'Ads', 'Affiliate Revenue'],
    datasets: [
      {
        label: 'Distribution',
        data: [45, 35, 20], // Sample percentage values
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',  // Blue - New Users
          'rgba(75, 192, 75, 0.6)',   // Green - Returning Users
          'rgba(255, 99, 132, 0.6)'   // Red - Inactive Users
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 75, 1)',
          'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{height: '350px',width: '100%'}}> {/* Adjust height and width */}
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
