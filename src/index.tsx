/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CounterComponent from "./components/CounterComponent";
import CounterComponent1 from "./components/CounterComponent1";
import reportWebVitals from "./reportWebVitals";
import { CountProvider } from "./CounterContext";
import store from "./redux/store";
import { Provider } from "react-redux";
import CounterComponent2 from "./components/CounterComponent2";
import reduxToolkitStore from "./redux-toolkit/store";
import CounterComponent3 from "./components/CounterComponent3";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <CounterComponent />
    <CountProvider>
      <CounterComponent1 />
    </CountProvider>
    <Provider store={store}>
      <CounterComponent2 />
    </Provider>
    <Provider store={reduxToolkitStore}>
      <CounterComponent3 />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
