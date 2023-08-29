import React, { useState } from "react";
import "./TemperatureControlApp.css";

function TemperatureControlApp() {
  const [temp, setTemp] = useState(10);
  const [tempColor, setTempColor] = useState("cold");

  const handleAdd = () => {
    if (temp === 30) return;
    const newTemp = temp + 1;
    if (newTemp > 15) setTempColor("hot");

    setTemp(newTemp);
  };

  const handleSubtraction = () => {
    if (temp === 0) return;
    const newTemp = temp - 1;
    if (newTemp < 15) setTempColor("cold");
    setTemp(temp - 1);
  };

  return (
    <div className="app-container">
      <h4>TemperatureControlApp</h4>
      <div className="temperatureDisplayContainer">
        <div className={`displayTemp ${tempColor}`}>{temp}°C</div>
      </div>
      <div className="Dis">
        <button className="buttonDis" onClick={handleAdd}>
          +
        </button>
        <button className="buttonDis" onClick={handleSubtraction}>
          -
        </button>
      </div>
    </div>
  );
}

export default TemperatureControlApp;
