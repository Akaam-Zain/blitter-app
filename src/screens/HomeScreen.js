import React from "react";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widget from "../components/Widget";
import "./styles/HomeScreen.css";

import { useLocation } from "react-router-dom";
import Profile from "../components/Profile";

function HomeScreen() {
  const location = useLocation();

  return (
    <div className="homeScreen">
      <Sidebar />

      {(() => {
        if (location.pathname === "/home") {
          return <Feed />;
        } else if (location.pathname === "/profile") {
          return <Profile />;
        }
      })()}

      <Widget />
    </div>
  );
}

export default HomeScreen;
