import React from "react";
import Banner from "../components/Banner";
import Login from "../components/Login";

import "./styles/LoginScreen.css";

function LoginScreen() {
  return (
    <div className="loginScreen">
      <Banner />
      <Login />
    </div>
  );
}

export default LoginScreen;
