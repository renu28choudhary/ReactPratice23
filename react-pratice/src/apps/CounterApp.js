import React, { useState } from "react";
import './CounterApp.css'
function CounterApp() {
  const [count, setCount] = useState(0);

  const handleAddition = () => {
    setCount(count + 1);
  };

  const handleSubtraction = () => {
    setCount(count - 1);
  };
  return (
    <div className="back">
      <h1>CounterApp</h1>
      <div> count is {count}</div>
      <button onClick={handleAddition}>+</button>
      <button onClick={handleSubtraction}>-</button>
    </div>
  );
}

export default CounterApp;
