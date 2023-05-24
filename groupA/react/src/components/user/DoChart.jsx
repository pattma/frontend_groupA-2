import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { CategoryScale, Chart, LinearScale, PointElement, LineElement } from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale);


export const data = {
  // labels: ['Walk', 'Swim', 'Run', 'Bike', 'Badminton'],
  datasets: [
    {
      label: 'TImes per week',  // add percent
      data: [12, 1, 7, 4, 2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function DoChart() {
  return (
    <div className="doughnut">
      <Doughnut 
        data={data}
        // width={7}
        // height={7}
        options={{
          maintainAspectRatio: true, plugins: {
            legend: {
              display: true,
            },
          },
        }}
      />
    </div>
  );
  
}
