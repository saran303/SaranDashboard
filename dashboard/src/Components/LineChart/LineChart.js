import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['','1/7', '8/7', '15/7', '22/7', '29/7', '5/8', '12/8', '19/8', '26/8', '2/9', '9/9', '16/9', '23/9', '30/9', '14/10','21/10'],
    datasets: [
      {
        label: 'Attendance',
        data: [ 'Null',25, 52, 20, 80, 50, 57, 80, 60, 85, 95, 75, 50, 70, 50, 65],
        borderColor: '#9b59b6',
        backgroundColor: 'rgba(155, 89, 182, 0.2)',
        pointBackgroundColor: '#000',
        pointBorderColor: '#000',
        pointHoverBackgroundColor: '#000',
        pointHoverBorderColor: '#000',
        fill: false,
        tension: 0,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Weeks',
        },
        grid: {
          display: true,
          color: '#D6D9DD',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Attendance',
        },
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25,
          callback: function(value) {
            return value + '%';
          },
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div style={{ width: '75vw', height: '40vh' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
