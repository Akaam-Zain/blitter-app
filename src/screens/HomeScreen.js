import React from "react";
import { useDispatch } from "react-redux";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widget from "../components/Widget";
import "./styles/HomeScreen.css";
import { useLocation } from "react-router-dom";
import Profile from "../components/Profile";
import Explore from "../components/Explore";
import Notifications from "../components/Notifications";

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
        } else if (location.pathname === "/explore") {
          return <Explore />;
        } else if (location.pathname === "/notifications") {
          return <Notifications />;
        }
      })()}

      <Widget />
    </div>
  );
}

export default HomeScreen;
