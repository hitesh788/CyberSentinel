import React from "react";
import indianMap from "../utils/indian-map.png";

function CyberRadar({ incidents = [] }) {
  const safeIncidents = Array.isArray(incidents) ? incidents : [];

  const cityPositions = {
    India: { top: "50%", left: "50%" },
    Delhi: { top: "20%", left: "48%" },
    Mumbai: { top: "55%", left: "30%" },
    Bengaluru: { top: "75%", left: "45%" },
    Hyderabad: { top: "60%", left: "48%" },
    Chennai: { top: "80%", left: "55%" },
    Pune: { top: "60%", left: "35%" }
  };

  const normalizeCity = (name) => {
    if (!name) return null;
    const key = name.toString().trim().toLowerCase();
    if (key.includes("delhi")) return "Delhi";
    if (key.includes("mumbai")) return "Mumbai";
    if (key.includes("bangalore") || key.includes("bengaluru")) return "Bengaluru";
    if (key.includes("hyderabad")) return "Hyderabad";
    if (key.includes("chennai")) return "Chennai";
    if (key.includes("pune")) return "Pune";
    if (key.includes("india")) return "India";
    return null;
  };

  const highThreats = safeIncidents
    .map((incident) => {
      const cityFromField = incident.city || incident.location;
      const city = normalizeCity(cityFromField);
      return {
        ...incident,
        city,
      };
    })
    .filter((t) => {
      const severity = (t.severity || "").toString().toLowerCase();
      return t.city && (severity === "high" || severity === "critical");
    });

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

{highThreats.map((t, i) => {
  const pos = cityPositions[t.city];
  if (!pos) return null;

  const severity = (t.severity || "").toString().toLowerCase();
  const dotColor = severity === "critical" ? "#8b0000" : "#ff0000";

  return (
    <div
      key={i}
      className="radar-dot"
      style={{
        top: pos.top,
        left: pos.left,
        background: dotColor,
        boxShadow: `0 0 10px ${dotColor}`,
      }}
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