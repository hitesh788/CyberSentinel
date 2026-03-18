import React from "react"
import { Bar } from "react-chartjs-2"
import {
Chart as ChartJS,
BarElement,
CategoryScale,
LinearScale,
Tooltip,
Legend
} from "chart.js"

ChartJS.register(BarElement,CategoryScale,LinearScale,Tooltip,Legend)

function AttackChart({incidents}){

const counts={}

incidents.forEach(i=>{
counts[i.attackType]=(counts[i.attackType]||0)+1
})

const labels=Object.keys(counts)
const values=Object.values(counts)

/* Different colors for each attack type */

const colors=[
"#ff5252",
"#ff9800",
"#ffd740",
"#69f0ae",
"#40c4ff",
"#7c4dff",
"#f50057",
"#00e5ff"
]

const data={
labels:labels,
datasets:[
{
label:"Attack Count",
data:values,
backgroundColor:labels.map((_,i)=>colors[i % colors.length])
}
]
}

const options={
plugins:{
legend:{display:false}
},
responsive:true
}

return(

<div>

<Bar data={data} options={options}/>

</div>

)

}

export default AttackChart