import React from "react";

import IncidentTable from "./IncidentTable";
import SectorChart from "./SectorChart";
import AttackChart from "./AttackChart";
import AttackMap from "./AttackMap";
import NewsFeed from "./NewsFeed";
import CyberRadar from "./CyberRadar";
import Recommendations from "./Recommendations";
import IndiaStatus from "./IndiaStatus";
import CIISectors from "./CIISectors";
import ThreatSources from "./ThreatSources";
import IncidentTimeline from "./IncidentTimeline";
import RiskScore from "./RiskScore";

function Dashboard({ incidents, liveIncidents }) {

const all = [...liveIncidents, ...incidents];

const critical = all.filter(i => i.severity === "Critical").length;
const high = all.filter(i => i.severity === "High").length;

return (
    

<div className="dashboard">

{/* ===================== */}
{/* TOP STATISTICS */}
{/* ===================== */}

<div className="cards">

<div className="card">
<h3>Total Incidents</h3>
<h2>{all.length}</h2>
</div>

<div className="card">
<h3>Critical Alerts</h3>
<h2>{critical}</h2>
</div>

<div className="card">
<h3>High Severity</h3>
<h2>{high}</h2>
</div>

<IndiaStatus/>

<RiskScore incidents={all}/>

</div>


{/* ===================== */}
{/* ANALYTICS CHARTS */}
{/* ===================== */}

<div className="grid">

<div className="chart">
<h3>Sector Attacks</h3>
<SectorChart incidents={all}/>
</div>

<div className="chart">
<h3>Attack Types</h3>
<AttackChart incidents={all}/>
</div>
<CyberRadar incidents={all}/>
<Recommendations incidents={all}/>

</div>


{/* ===================== */}
{/* ATTACK MAP */}
{/* ===================== */}

<div className="chart">

<h3>Cyber Attack Map</h3>

<AttackMap incidents={all}/>

</div>


{/* ===================== */}
{/* INFRASTRUCTURE + SOURCES */}
{/* ===================== */}

<div className="grid">

<CIISectors/>

<ThreatSources/>

</div>


{/* ===================== */}
{/* INCIDENT TIMELINE */}
{/* ===================== */}

<div className="chart">

<IncidentTimeline incidents={all}/>

</div>


{/* ===================== */}
{/* CYBER NEWS */}
{/* ===================== */}

<div className="chart">

<h3>Cybersecurity News</h3>

<NewsFeed/>

</div>


{/* ===================== */}
{/* INCIDENT TABLE */}
{/* ===================== */}

<div className="table">

<h3>Incident Feed</h3>

<IncidentTable incidents={all}/>

</div>


</div>

);

}

export default Dashboard;