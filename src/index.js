import React from "react";
import { render } from "react-dom";
import "./index.css";
// import App from "./App";
import Signup from "./components/Signup";

render(
  <React.StrictMode>
    <Signup />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
