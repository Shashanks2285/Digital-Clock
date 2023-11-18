import React, { useState } from "react";


const App =()=>{
  let time = new Date().toLocaleTimeString();
  console.log(time);
  const [ctime, uptime]= useState(time);

  const updateT =()=>{
    time = new Date().toLocaleTimeString();
    uptime(time);
  }

  setInterval(updateT,999+1);
  // automate


  return(
    <div>
      <h1>{ctime}</h1> 
      <h1 className="name">Designed By : Shashank Shekhar</h1>
    </div>);
}

export default App;