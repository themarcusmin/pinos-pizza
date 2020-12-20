import React from "react";
import { Router } from "@reach/router";

import { AuthProvider } from "../utils/AuthContext";
import { MenuProvider } from "../utils/MenuContext";

import Home from "./Home";
import Signup from "../auth/Signup";
import Login from "../auth/Login";
import ForgotPassword from "../auth/ForgotPassword";
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <MenuProvider>
        <Router>
          <Home path="/" />
          <Login path="/login" />
          <Signup path="/signup" />
          <ForgotPassword path="/forgot-password" />
          <PrivateRoute path="/dashboard/*" component={Dashboard} />
        </Router>
      </MenuProvider>
    </AuthProvider>
  )
}

export default App;