import React, { createContext, useContext, useState } from "react";

interface CounterContextType {
  count: number;
  increament: () => void;
  reset: () => void;
}

export const CounterContext = createContext<CounterContextType>({
  count: 0,
  increament: () => {},
  reset: () => {},
});

export const CountProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);

  const increament = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <CounterContext.Provider value={{ count, increament, reset }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  return useContext(CounterContext);
};
