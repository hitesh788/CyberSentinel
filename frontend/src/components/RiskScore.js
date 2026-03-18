import React from "react"

function RiskScore({incidents}){

const score = incidents.reduce((acc, i) => {
  if (i.severity === "Critical") return acc + 20;
  if (i.severity === "High") return acc + 10;
  if (i.severity === "Medium") return acc + 5;
  return acc + 2;
}, 0);

const scoreColor = score > 210 ? "#ff5252" : score >= 150 ? "#ffca28" : "#4caf50";

return (
  <div className="card">
    <h3>Cyber Risk Score</h3>
    <h2 style={{ color: scoreColor }}>{score}</h2>
  </div>
);

}

export default RiskScore