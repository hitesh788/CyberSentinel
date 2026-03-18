import React from "react";
import indianMap from "../utils/indian-map.png";

function CyberRadar({ threats = [] }) {

const safeThreats = Array.isArray(threats) ? threats : [];
const highThreats = safeThreats.filter(t => t.severity === "High");

const cityPositions = {
Delhi: { top: "20%", left: "48%" },
Mumbai: { top: "55%", left: "30%" },
Bengaluru: { top: "75%", left: "45%" },
Hyderabad: { top: "60%", left: "48%" },
Chennai: { top: "80%", left: "55%" },
Pune: { top: "60%", left: "35%" }
};

return(

<div className="radar-card">

<h3>🇮🇳 Live Indian Cyberspace Scanner</h3>

<div className="radar-container">

<div className="radar">

<div className="radar-sweep"></div>

<img
src={indianMap}
alt="india"
className="india-map"
/>

{highThreats.map((t,i)=>{

const pos = cityPositions[t.city];
if(!pos) return null;

return(
<div
key={i}
className="radar-dot"
style={{ top: pos.top, left: pos.left }}
></div>
);

})}

</div>

</div>

<p className="radar-text">
Monitoring High-Risk Cyber Threat Zones Across India
</p>

</div>

);

}

export default CyberRadar;