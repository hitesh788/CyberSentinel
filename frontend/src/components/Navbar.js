import React from "react";
import { exportDashboardPDF } from "../utils/exportPDF";

function Navbar({ toggleTheme, dark, status, refreshing }) {

const getStatusClass = () => {
if(status === "critical") return "status-red";
if(status === "medium") return "status-orange";
return "status-green";
};

return(

<div className="navbar">

<h2>CyberSentinel</h2>

<div style={{display:"flex", alignItems:"center"}}>

{/* 🟢 STATUS LIGHT */}
<div className="status-indicator">
  <span className={`status-dot ${getStatusClass()}`}></span>
  <span>
    {status === "critical" ? "Critical" :
     status === "medium" ? "Moderate" : "Normal"}
  </span>
  {refreshing ? <span className="refreshing-text">Refreshing…</span> : null}
</div>

<button className="theme-btn" onClick={toggleTheme}>
{dark ? "Light" : "Dark"}
</button>

<button className="export-btn" onClick={exportDashboardPDF}>
Export Report
</button>

</div>

</div>

)

}

export default Navbar;