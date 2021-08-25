import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import { Menu, MenuItem } from "@material-ui/core";

import "./stlyes/ProfileButton.css";

function ProfileButton({ displayName, photoURL }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <Button className="profile__button" onClick={openMenu} fullWidth>
        <Avatar className="profile__avatar" src={photoURL}></Avatar>
        <h4>{displayName}</h4>

        <MoreHoriz />
      </Button>
      <Menu
        id="profile__menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Logout</MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Subscribe</MenuItem>
      </Menu>
    </div>
  );
}

export default ProfileButton;
