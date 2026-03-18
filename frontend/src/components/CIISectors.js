import React from "react"

function CIISectors(){

const sectors=[
"Banking",
"Power Grid",
"Telecommunications",
"Healthcare",
"Transport",
"Government"
]

return(

<div className="chart">

<h3>Critical Infrastructure Sectors</h3>

<table className="table">
  <tbody>
    {sectors.map((s, i) => (
      <tr key={i}>
        <td>{s}</td>
      </tr>
    ))}
  </tbody>
</table>

</div>

)

}

export default CIISectors