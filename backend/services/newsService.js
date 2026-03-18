const axios=require("axios")

const fetchCyberNews=async()=>{

try{

const res=await axios.get(
`https://newsapi.org/v2/everything?q=cybersecurity&apiKey=${process.env.NEWS_API_KEY}`
)

return res.data.articles.slice(0,10)

}catch(error){

return []

}

}

module.exports={fetchCyberNews}