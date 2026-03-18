import React from "react"

function IncidentTimeline({incidents}){

return(

<div className="chart">

<h3>Recent Cyber Incidents</h3>

<table className="table">
  <tbody>
    {incidents.slice(0,5).map((i, index) => (
      <tr key={index}>
        <td><b>{i.attackType}</b></td>
        <td>{i.title}</td>
      </tr>
    ))}
  </tbody>
</table>

</div>

)

}

export default IncidentTimeline