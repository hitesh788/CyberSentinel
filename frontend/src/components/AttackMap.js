import React,{useEffect,useState} from "react"
import { MapContainer,TileLayer,CircleMarker,Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

function AttackMap(){

const cities=[
{city:"Delhi",lat:28.61,lon:77.20},
{city:"Mumbai",lat:19.07,lon:72.87},
{city:"Bengaluru",lat:12.97,lon:77.59},
{city:"Hyderabad",lat:17.38,lon:78.48},
{city:"Chennai",lat:13.08,lon:80.27},
{city:"Pune",lat:18.52,lon:73.85}
]

const [threats,setThreats]=useState([])

const getSeverityColor=(level)=>{

if(level==="High") return "#8b0000"
if(level==="Medium") return "#ff4d4d"
return "#ff9999"

}

useEffect(()=>{

const updateThreats=()=>{

const updated=cities.map(c=>{

const r=Math.random()

let level="Low"

if(r>0.7) level="High"
else if(r>0.4) level="Medium"

return{

...c,
severity:level

}

})

setThreats(updated)

}

updateThreats()

const interval=setInterval(updateThreats,6000)

return()=>clearInterval(interval)

},[])

return(

<div style={{height:"420px"}}>

<MapContainer center={[22.59,78.96]} zoom={5} style={{height:"100%"}}>

<TileLayer
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>

{threats.map((t,index)=>(

<CircleMarker
key={index}
center={[t.lat,t.lon]}
radius={18}
pathOptions={{
color:getSeverityColor(t.severity),
fillColor:getSeverityColor(t.severity),
fillOpacity:0.8
}}
>

<Popup>

<b>{t.city}</b>

<br/>

Cyber Threat Level: {t.severity}

</Popup>

</CircleMarker>

))}

</MapContainer>

</div>

)

}

export default AttackMap