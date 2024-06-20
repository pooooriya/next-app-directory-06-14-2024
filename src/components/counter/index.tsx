"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </>
  );
};

export default Counter;
