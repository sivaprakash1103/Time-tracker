import React from 'react'
import { useState,useEffect } from 'react'
import "./index.css"

function App (){
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(()=>{
  const timer = setInterval(()=>{
    setCurrentTime(new Date());
  },1000);
  return () =>clearInterval(timer);
  },[]);

  const formatTimeWithLeadingzero =(num)=>{
    return num<10 ? `0${num}` :num;
  }

  const formatdate= (date) =>{
    return date.toLocaleDateString(undefined,options);
  }
  const options={weekday: "long", year:"numeric",month:"long",day:"numeric" };
  const formatHour=(hour)=>{
    return hour == 0?12:hour>=12?hour-12:hour
  };

  

  return (
    <>
    <div className="digital-clock">
   <h1> Digital Clock</h1>
   <div className="time ">{ formatTimeWithLeadingzero(formatHour(currentTime.getHours()))}:
    {formatTimeWithLeadingzero(currentTime.getMinutes())}:
    {formatTimeWithLeadingzero(currentTime.getSeconds())}:
    {currentTime.getHours() >= 12 ? " PM ": " AM "}
     </div>
   <div className="date">{formatdate(currentTime)}</div>



    </div>

    </>
);
}

export default App
