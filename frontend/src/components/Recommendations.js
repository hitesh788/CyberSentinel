import React from "react";

function Recommendations({ incidents }) {

const critical = incidents.filter(i=>i.severity==="Critical").length;

return(

<div className="recommendation-card">

<h3>🛡️ Security Recommendations</h3>

<ul className="recommendation-list">

{critical > 3 && <li>⚠ Patch critical vulnerabilities immediately</li>}
<li>🔒 Enable multi-factor authentication</li>
<li>🚫 Block malicious IPs and domains</li>
<li>📧 Monitor phishing emails</li>
<li>🔄 Keep systems updated regularly</li>

</ul>

</div>

)

}

export default Recommendations;