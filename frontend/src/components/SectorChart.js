import React from "react";
import { Pie } from "react-chartjs-2";

import {
Chart as ChartJS,
ArcElement,
Tooltip,
Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function SectorChart({ incidents }) {

const data = {
  labels: [
    "Banking",
    "Power Grid",
    "Telecommunications",
    "Healthcare",
    "Transport",
    "Government",
  ],
  datasets: [
    {
      data: [5, 3, 2, 1, 4, 2],
      backgroundColor: [
        "#2196f3", // Banking (blue)
        "#ff9800", // Power Grid (orange)
        "#7c4dff", // Telecommunications (purple)
        "#69f0ae", // Healthcare (green)
        "#ffd54f", // Transport (yellow)
        "#ff5252", // Government (red)
      ],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 1000,
    easing: "easeOutBounce", // 🔥 cool effect
  },
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        boxWidth: 12,
        padding: 12,
      },
    },
    title: {
      display: true,
      text: "Critical Infrastructure Sector Breakdown",
      font: { size: 16 },
    },
  },
};
return(
<div style={{height:"300px"}}>
<Pie data={data} options={options} redraw />
</div>
);

}

export default SectorChart;