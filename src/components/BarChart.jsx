import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart() {

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr"],
        datasets: [
          {
            label: "Diseases Trend",
            data: [15000, 13000, 12000, 14000],
            backgroundColor: ["#4CAF50", "#FFC107", "#2196F3", "#FF5722"],
          },
        ],
      };

  return (
    <>
     <div className='w-full'>
       <Bar data={data}/>
     </div>
    </>
  )
}

export default BarChart
