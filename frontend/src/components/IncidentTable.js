import React,{useState} from "react"

function IncidentTable({incidents}){

const [search,setSearch]=useState("")

const filtered = incidents.filter(i =>
i.title.toLowerCase().includes(search.toLowerCase())
)

const getSeverityClass=(severity)=>{

if(severity==="Critical") return "sev-critical"
if(severity==="High") return "sev-high"
if(severity==="Medium") return "sev-medium"
return "sev-low"

}

return(

<div>

<div className="search">

<input
placeholder="Search incidents..."
onChange={(e)=>setSearch(e.target.value)}
/>

</div>

<table>

<thead>

<tr>
<th>Title</th>
<th>Severity</th>
<th>Sector</th>
<th>Attack</th>
<th>Source</th>
</tr>

</thead>

<tbody>

{filtered.map((i,index)=>(

<tr key={index}>

<td>{i.title}</td>

<td className={getSeverityClass(i.severity)}>
{i.severity}
</td>

<td>{i.sector}</td>

<td>{i.attackType}</td>

<td>{i.source}</td>

</tr>

))}

</tbody>

</table>

</div>

)

}

export default IncidentTable