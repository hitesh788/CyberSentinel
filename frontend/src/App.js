import React, { useState } from "react";
import Home from "./pages/Home";

function App(){

const [dark,setDark]=useState(false);

const toggleTheme=()=>{
setDark(!dark);
document.body.classList.toggle("dark");
};

return(
<Home toggleTheme={toggleTheme} dark={dark}/>
)

}

export default App;