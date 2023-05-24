import React from "react";
import { useState } from "react";
import "../user/User_main.css";
import { Line } from 'react-chartjs-2';
import { CategoryScale, Chart, LinearScale, PointElement, LineElement } from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);



const LineChart = function () {

  const [dataOn, setDataOn] = useState({
    dataset1: true,
    dataset2: true,
    dataset3: true,
    dataset4: true,
    dataset5: true,
  });


  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Walk',
        data: [11, 7, 0, 5, 2, 3, 10],
        backgroundColor: 'rgba(75,192,192,0)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        hidden: !dataOn.dataset1,
      },
      {
        label: 'Swim',
        data: [6, 2, 10, 4, 7, 9, 2],
        backgroundColor: 'rgba(60,124,192,0)',
        borderColor: 'rgba(175,122,153,1)',
        borderWidth: 2,
        hidden: !dataOn.dataset2,
      },
      {
        label: 'Run',
        data: [1, 7, 5, 11, 2, 3, 9],
        backgroundColor: 'rgba(10,111,192,0)',
        borderColor: 'rgba(15,292,124,1)',
        borderWidth: 2,
        hidden: !dataOn.dataset3,
      },
      {
        label: 'Bike',
        data: [5, 2, 4, 1, 2, 3, 5],
        backgroundColor: 'rgba(10,111,192,0)',
        borderColor: 'rgba(125,104,179,1)',
        borderWidth: 2,
        hidden: !dataOn.dataset4,
      },
      {
        label: 'Badminton',
        data: [8, 1, 2, 4, 0, 1, 5],
        backgroundColor: 'rgba(10,111,192,0)',
        borderColor: 'rgba(99,124,109,1)',
        borderWidth: 2,
        hidden: !dataOn.dataset5,
      },
    ],
  }

  const toggleData = (dataset) => {
    setDataOn((viewData) => ({
      ...viewData,
      [dataset]: !viewData[dataset],
    }))
  };

  return (
    <div className="lineChart">
      <Line
        data={data}
        // width={7}
        // height={7}
        options={{
          maintainAspectRatio: true, plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
      <div className="LegendBTN">
        <button onClick={() => toggleData('dataset1')}>Walk</button>
        <button onClick={() => toggleData('dataset2')}>Swim</button>
        <button onClick={() => toggleData('dataset3')}>Run</button>
        <button onClick={() => toggleData('dataset4')}>Bike</button>
        <button onClick={() => toggleData('dataset5')}>Badminton</button>
      </div>
    </div>
  );
};

export default LineChart;
