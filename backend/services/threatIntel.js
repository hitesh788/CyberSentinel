const axios = require("axios")

/* ============================== */
/* CACHE TO PREVENT RATE LIMITS  */
/* ============================== */

let cache = []
let lastFetch = 0

const CACHE_TIME = 15 * 60 * 1000 // 15 minutes


/* ===================== */
/* OPENPHISH FEED        */
/* ===================== */

async function fetchOpenPhish(){

try{

const res = await axios.get("https://openphish.com/feed.txt")

const urls = res.data.split("\n").filter(Boolean).slice(0,10)

return urls.map(url => ({

title:`Phishing site detected`,
severity:"High",
attackType:"Phishing",
sector:"Web",
source:"OpenPhish",
indicator:url

}))

}catch(err){

console.log("OpenPhish error:", err.message)

return []

}

}


/* ===================== */
/* CISA EXPLOITED VULNS  */
/* ===================== */

async function fetchCISA(){

try{

const res = await axios.get(
"https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json"
)

const vulns = res.data.vulnerabilities.slice(0,10)

return vulns.map(v => ({

title:`Exploit detected: ${v.cveID}`,
severity:"Critical",
attackType:"Vulnerability Exploit",
sector:"Infrastructure",
source:"CISA",
indicator:v.product

}))

}catch(err){

console.log("CISA error:", err.message)

return []

}

}


/* ===================== */
/* URLHAUS MALWARE FEED  */
/* ===================== */

async function fetchURLHaus(){

try{

const res = await axios.get(
"https://urlhaus.abuse.ch/downloads/json_recent/"
);

const data = res.data.slice(0,10);

return data.map(u => ({

title:"Malware distribution detected",
severity:"High",
attackType:"Malware",
sector:"Web",
source:"URLHaus",
indicator:u.url

}));

}catch(err){

console.log("URLHaus error:", err.message)

return []

}

}


/* ===================== */
/* MAIN THREAT AGGREGATOR */
/* ===================== */

async function fetchThreatIntel(){

const now = Date.now()

if(now - lastFetch < CACHE_TIME){
return cache
}

const phishing = await fetchOpenPhish()
const vulnerabilities = await fetchCISA()
const malware = await fetchURLHaus()

const threats = [

...phishing,
...vulnerabilities,
...malware

]

cache = threats
lastFetch = now

return threats

}

module.exports = { fetchThreatIntel }