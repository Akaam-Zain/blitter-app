import React, { useState, useEffect } from "react";
import "./stlyes/Notifications.css";
import { AppBar, Tabs, Tab } from "@material-ui/core";

function Notifications() {
  const [selectedTab, setselectedTab] = React.useState(0);

  const handleChange = (event, newselectedTab) => {
    setselectedTab(newselectedTab);
  };

  return (
    <div className="notifications">
      <div className="notifications__header">
        <h2>Notifications</h2>
        <div>
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            className="profile__tabs"
          >
            <Tab className="profile__tab" label="All" />
            <Tab className="profile__tab" label="Mentions" />
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
