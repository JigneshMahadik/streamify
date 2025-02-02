import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  // Sample data for top 5 streamed songs
  const data = {
    labels: ['Pehle Bhi Main', 'Husn', 'Softly', 'Lalkara', 'One Love'], // Song names
    datasets: [
      {
        label: 'Streams (in millions)',
        data: [12.4, 9.8, 8.6, 7.2, 5.9], // Example stream counts
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // Red
          'rgba(54, 162, 235, 0.6)', // Blue
          'rgba(255, 206, 86, 0.6)', // Yellow
          'rgba(75, 192, 192, 0.6)', // Teal
          'rgba(153, 102, 255, 0.6)' // Purple
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Streams (in millions)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Top Songs',
        },
      },
    },
  };

  return (
    <div style={{height: '350px',width: '100%'}}> {/* Adjust height and width */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
