import React, { useState } from "react";

const CounterComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  const buttonClick = () => {
    setCount(count + 1);
  };

  const resetClick = () => {
    setCount(0);
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        Counter Using Functional State
        <h1>Counter: {count}</h1>
        <Increament increamentCount={buttonClick} count={count} />
        <Reset resetCount={resetClick} />
      </div>
    </div>
  );
};

type IncrementProps = {
  increamentCount: () => void;
  count: number;
};

const Increament: React.FC<IncrementProps> = ({ increamentCount, count }) => {
  return (
    <div>
      <button onClick={increamentCount}>Increament Button: {count}</button>
    </div>
  );
};

type ResetProps = {
  resetCount: () => void;
};

const Reset: React.FC<ResetProps> = ({ resetCount }) => {
  return <button onClick={resetCount}> Reset Button </button>;
};

export default CounterComponent;
