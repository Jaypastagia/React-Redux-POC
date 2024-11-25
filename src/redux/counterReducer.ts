// This is the reducer, a pure function that defines how the application's state should change in response to specific actions.

import {
  CounterState,
  CounterActionTypes,
  INCREMENT,
  DECREMENT,
  RESET,
} from "./types";

// initialState: Defines the default state when the app starts.
const initialState: CounterState = {
  count: 0,
};

const counterReducer = (
  state = initialState,
  action: CounterActionTypes,
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1, temp: "tmp" };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default counterReducer;
