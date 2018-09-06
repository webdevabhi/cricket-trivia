import React from 'react';

import { Bar } from 'react-chartjs-2';

const barChart = () => {
    const bar = {
        labels: ['Correct', 'In Correct'],
        datasets: [
            {
                label: 'Result',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [3, 7],
            },
        ],
    };

    const options = {
        tooltips: {
            enabled: false,
        },
        maintainAspectRatio: false
    }

    return (
        <div>
            <Bar data={bar} options={options} />
        </div>
    );
};

export default barChart;