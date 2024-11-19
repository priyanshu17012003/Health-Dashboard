import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement, 
  LineElement,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

function RecoveryChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"], 
    datasets: [
      {
        label: "Recovery Trend", 
        data: [15000, 13000, 12000, 14000], 
        borderColor: "#4CAF50", 
        backgroundColor: "rgba(76, 175, 80, 0.2)", 
        borderWidth: 2, 
        tension: 0.4, 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      }
    },
    scales: {
      y: {
        beginAtZero: true, 
      },
    },
  };

  return (
    <>
      <Line data={data} options={options}/>
    </>
  );
}

export default RecoveryChart;
