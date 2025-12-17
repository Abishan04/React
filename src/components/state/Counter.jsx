import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const handlerIncrement = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };

  const handlerdecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button onClick={handlerIncrement}>Increment</button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
