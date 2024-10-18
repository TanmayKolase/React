import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment +1</button>
      <br />
      <button onClick={handleDecrement}>Decrement -1</button>
    </>
  );
};

export default Counter;
