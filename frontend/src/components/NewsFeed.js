import React,{useEffect,useState} from "react";
import axios from "axios";

function NewsFeed(){

const [news,setNews]=useState([]);

useEffect(()=>{

axios.get("http://localhost:5000/api/news")
.then(res=>setNews(res.data))
.catch(err=>console.log(err));

},[]);

return(

<table className="news-table">

<thead>

<tr>
<th>Title</th>
<th>Source</th>
<th>Published</th>
</tr>

</thead>

<tbody>

{news.map((n,index)=>(

<tr key={index}>

<td>

<a href={n.url} target="_blank" rel="noreferrer">

{n.title}

</a>

</td>

<td>{n.source?.name}</td>

<td>{new Date(n.publishedAt).toLocaleDateString()}</td>

</tr>

))}

</tbody>

</table>

);

}

export default NewsFeed;