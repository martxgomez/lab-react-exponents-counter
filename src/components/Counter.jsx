import { useState } from "react";

const Counter = (props) => {
 

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="counter-container">
      <p className="counter-value">{count}</p>
    
    </div>
  );
};

export default Counter;
