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
import { Avatar } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import MoreToggle from "./MoreToggle";
import ProfileButton from "./ProfileButton";
// import HomeIcon from "@material-ui/icons/Home";

function Sidebar() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="sidebar">
      {/** Twitter Icon */}
      <TwitterIcon className="sidebar__blitterIcon" />

      {/** SidebarOption */}

      <SidebarOption active Icon={HomeIcon} text="Home" path="/home" />
      <SidebarOption Icon={SearchIcon} text="Explore" path="/explore" />
      <SidebarOption
        Icon={NotificationIcon}
        text="Notifications"
        path="/notifications"
      />
      {/* <SidebarOption Icon={MessageIcon} text="Messages" path="/messages" />
      <SidebarOption Icon={BookmarkIcon} text="Bookmarks" path="/bookmarks" />
      <SidebarOption Icon={ListIcon} text="Lists" path="/lists" /> */}
      <SidebarOption Icon={ProfileIcon} text="Profile" path="/profile" />
      <SidebarOption Icon={MoreIcon} text="More" path="/more" />
      <Button variant="outlined" className="sidebar__bleet" fullWidth>
        Bleet
      </Button>

      {/** Profile Icon */}
      <div>
        <ProfileButton
          photoURL={user?.photoURL}
          displayName={user?.displayName}
        >
          <Avatar className="profile__iconAvatar" src={user?.photoURL}></Avatar>
          <Link to="#" className="profile__iconName">
            {user?.displayName}
          </Link>
        </ProfileButton>
      </div>
    </div>
  );
}

export default Sidebar;
