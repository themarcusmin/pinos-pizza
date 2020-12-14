import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
// import Home from "./components/Home";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import ForgotPassword from "./components/ForgotPassword";

render(
  <React.StrictMode>
    {/* <Home /> */}
    {/* <ForgotPassword /> */}
    {/* <Login /> */}
    {/* <Signup /> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
