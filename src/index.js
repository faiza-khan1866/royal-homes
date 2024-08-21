import React from "react";
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./css/all.min.css";
import App from "./main-component/App/App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./services/redux/store";
// import ContextProvider from "./services/context/ContextProvider";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    {/* <ContextProvider> */}
    <App />
    {/* </ContextProvider> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
