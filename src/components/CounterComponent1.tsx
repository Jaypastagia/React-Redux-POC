/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { CounterContext, useCounter } from "../CounterContext";

const CounterComponent1 = () => {
  // const { count, increament, reset } = useContext(CounterContext);
  const { count, increament, reset } = useCounter();

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <div>Counter Using Context</div>
        <h1>Counter: {count}</h1>
        <button onClick={increament}>Increament</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};

export default CounterComponent1;
