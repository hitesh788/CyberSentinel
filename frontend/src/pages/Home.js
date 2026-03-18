import React, { useCallback, useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import { getLiveIncidents } from "../api/cyberAPI";

function Home({ toggleTheme, dark }) {

const [liveIncidents,setLiveIncidents]=useState([]);
const [status,setStatus]=useState("normal");
const [loading,setLoading]=useState(true);
const firstLoadRef = useRef(true);

const calculateStatus = useCallback((data) => {
  const score = data.reduce((acc, i) => {
    if (i.severity === "Critical") return acc + 20;
    if (i.severity === "High") return acc + 10;
    if (i.severity === "Medium") return acc + 5;
    return acc + 2;
  }, 0);

  if (score > 210) return "critical"; // red
  if (score >= 150) return "medium"; // yellow
  return "normal"; // green
}, []);

const loadData = useCallback(async () => {
  if (firstLoadRef.current) {
    setLoading(true);
  }

  try {
    const res = await getLiveIncidents();

    setLiveIncidents(res.data);
    /* 🔥 Calculate status */
    setStatus(calculateStatus(res.data));
  } catch (e) {
    console.log(e);
  }

  if (firstLoadRef.current) {
    setLoading(false);
    firstLoadRef.current = false;
  }
}, [calculateStatus]);

useEffect(() => {
  loadData();

  const interval = setInterval(() => {
    loadData();
  }, 30000);

  return () => clearInterval(interval);
}, [loadData]);

return(

<div>

{/* ✅ Pass theme props */}
<Navbar toggleTheme={toggleTheme} dark={dark} status={status} />

  {loading ? (
    <div className="loader-container">
      <div className="cyber-loader"></div>
      <p>Loading Cyber Incident Feed...</p>
    </div>
  ) : (
    <>
      <Dashboard incidents={[]} liveIncidents={liveIncidents} />
      <Footer />
    </>
  )}

</div>

)

}

export default Home;