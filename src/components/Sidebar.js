import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import "./stlyes/Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationsNone";
import MessageIcon from "@material-ui/icons/Message";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ListIcon from "@material-ui/icons/ListAlt";
import ProfileIcon from "@material-ui/icons/Person";
import MoreIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

// import HomeIcon from "@material-ui/icons/Home";

function Sidebar() {
  return (
    <div className="sidebar">
      {/** Twitter Icon */}
      <TwitterIcon className="sidebar__blitterIcon" />
      {/** SidebarOption */}
      {/** SidebarOption */}
      {/** SidebarOption */}
      {/** SidebarOption */}
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationIcon} text="Notifications" />
      <SidebarOption Icon={MessageIcon} text="Messages" />
      <SidebarOption Icon={BookmarkIcon} text="Bookmarks" />
      <SidebarOption Icon={ListIcon} text="Lists" />
      <SidebarOption Icon={ProfileIcon} text="Profile" />
      <SidebarOption Icon={MoreIcon} text="More" />
      <Button variant="outlined" className="sidebar__bleet" fullWidth>
        Bleet
      </Button>

      {/** Twitter Icon */}
    </div>
  );
}

export default Sidebar;
