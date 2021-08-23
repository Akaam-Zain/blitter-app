import React from "react";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widget from "../components/Widget";
import "./styles/HomeScreen.css";

function HomeScreen(user) {
  console.log(user);

  return (
    <div className="homeScreen">
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
}

export default HomeScreen;
