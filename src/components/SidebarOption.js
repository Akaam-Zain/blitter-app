import React from "react";
import "./stlyes/SidebarOption.css";
import { useHistory } from "react-router";

function SidebarOption({ active, text, Icon, path }) {
  const history = useHistory();
  function handleClick() {
    history.push(`${path}`);
    console.log(path);
  }
  return (
    <div
      onClick={handleClick}
      className={`sidebarOption ${active && "sidebarOption--active"}`}
    >
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
