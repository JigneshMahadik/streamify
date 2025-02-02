import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  // Months from Jan to Dec
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // More dynamic and meaningful user data
  const totalUsers = [100, 250, 1000, 850, 2000, 400, 1200, 2400, 2100, 1800, 1950, 2100];
  const activeUsers = [80, 180, 320, 450, 1100, 750, 900, 600, 1250, 1400, 1550, 1700];

  const data = {
    labels,
    datasets: [
      {
        label: 'Total Users',
        data: totalUsers,
        borderColor: 'rgba(54, 162, 235, 1)', // Blue
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
      {
        label: 'Active Users',
        data: activeUsers,
        borderColor: 'rgba(75, 192, 75, 1)', // Green
        backgroundColor: 'rgba(75, 192, 75, 0.2)',
        fill: true,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true, // Y-axis starts from 0
      },
    },
  };

  return (
    <div style={{height: '350px',width: '100%'}}> {/* Adjust height and width */}
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
