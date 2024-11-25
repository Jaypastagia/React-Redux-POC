import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, reset } from "../redux-toolkit/counterSlice";
import { RootState, AppDispatch } from "../redux-toolkit/store";

const CounterComponent3: React.FC = () => {
  console.log("CounterComponent3 called----");
  const dispatch: AppDispatch = useDispatch();
  const count = useSelector((state: RootState) => {
    console.log("useSelector----", state);
    return state.counter.value;
  });

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <div>Counter Using Redux Toolkit</div>
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </>
  );
};

export default CounterComponent3;
