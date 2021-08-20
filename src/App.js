import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widget from "./components/Widget";

function App() {
  return (
    <div className="app">
      {/*Side Bar */}
      <Sidebar />

      {/*Feed */}
      <Feed />
      {/*Widget */}
      <Widget />
    </div>
  );
}

export default App;
