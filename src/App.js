import React from "react";
import { useState } from "react";

const App = () => {
  let getTime = new Date().toLocaleTimeString();

  const [time, setTime] = useState(getTime);

  const updateTime = () => {
    getTime = new Date().toLocaleTimeString();
    setTime(getTime);
  };

  setInterval(updateTime, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
    </div>
  );
};

export default App;
