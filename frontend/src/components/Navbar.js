import React from "react";
import { exportDashboardPDF } from "../utils/exportPDF";
import logo from "../utils/main-logo.png";

function Navbar({ toggleTheme, dark, status }) {

const getStatusClass = () => {
if(status === "critical") return "status-red";
if(status === "medium") return "status-orange";
return "status-green";
};

return(

<div className="navbar">

<img src={logo} alt="CyberSentinel" draggable="false" className="navbar-logo" />

<div style={{display:"flex", alignItems:"center"}}>

{/* 🟢 STATUS LIGHT */}
<div className="status-indicator">
  <span className={`status-dot ${getStatusClass()}`}></span>
  <span>
    {status === "critical" ? "Critical" :
     status === "medium" ? "Moderate" : "Normal"}
  </span>
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