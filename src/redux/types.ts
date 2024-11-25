import counterReducer from "./counterReducer";

export type RootState = ReturnType<typeof counterReducer>;

export type CounterState = {
  count: number;
  temp?: string;
};

export type CounterActionTypes = {
  type: string;
};

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";
