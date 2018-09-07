import React from 'react';

import { Bar } from 'react-chartjs-2';

const barChart = () => {
    const data = {
        labels: ['Correct', 'Incorrect'],
        datasets: [
          {
            label: 'Result',
            backgroundColor: 'rgba(0,0,0,0.2)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0,0,10,0.7)',
            hoverBorderColor: 'rgba(0,0,0,1)',
            data: [1, 3]
          }
        ]
    };

    const options = {
        responsive: true,
        tooltips: {
            enabled: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    suggestedMax: 4
                }
            }]
        },
        maintainAspectRatio: true
    }

    return (
        <div>
            <Bar data={data} options={options} height={300} />
        </div>
    );
};

export default barChart;