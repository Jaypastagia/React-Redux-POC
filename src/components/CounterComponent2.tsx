import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CounterState } from "./../redux/types";
import { increment, reset } from "../redux/action";

const CounterComponent2 = () => {
  const count = useSelector((state: CounterState) => {
    console.log("useSelector----");
    console.log(state);
    return state.count;
  });
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <div>Counter Using Redux</div>
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </>
  );
};

export default CounterComponent2;
