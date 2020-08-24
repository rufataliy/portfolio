import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

console.log(process.env.REACT_APP_API_URL);

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./__mocks__/");
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
