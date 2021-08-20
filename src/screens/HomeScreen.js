import React from "react";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widget from "../components/Widget";
import "./styles/HomeScreen.css";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
}

export default HomeScreen;
