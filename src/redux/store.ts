// This file sets up the Redux store, which is the central place where the application state is managed.

// The createStore function initializes the store with the reducer.
// It acts as a single source of truth for your app's state.

import { createStore } from "redux";
import counterReducer from "./counterReducer";

const store = createStore(counterReducer);

export default store;
