import React from 'react';

import { Bar } from 'react-chartjs-2';

const barChart = (props) => {

    const options = {
        responsive: true,
        tooltips: { enabled: false },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fixedStepSize: 1,
                    suggestedMax: 4
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor:['rgba(44,44,44,0.8)','rgba(44,44,44,0.8)']
                }
            }]
        },
        title: {
            display: true,
            text: 'Result',
            fontSize: 25,
        },
        legend: { display: false },
        maintainAspectRatio: true
    }

    return (
        <div>
            <Bar data={props.data} options={options} height={300} />
        </div>
    );
};

export default barChart;