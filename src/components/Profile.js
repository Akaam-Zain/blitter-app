import React, { useState, useEffect } from "react";
import { Avatar, Button } from "@material-ui/core";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import "./stlyes/Profile.css";
import Widget from "./Widget";
import CakeIcon from "@material-ui/icons/Cake";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Post from "./Post";
import db from "../firebase";

function Profile() {
  const [selectedTab, setselectedTab] = React.useState(0);

  const handleChange = (event, newselectedTab) => {
    setselectedTab(newselectedTab);
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      );
  }, []);

  return (
    <div className="profile">
      <div className="profile__header">
        <h2>Profile</h2>
        <img src="https://pub-static.fotor.com/assets/projects/pages/ae1ff350-93c5-11e8-9d5a-8b36154e6d3a_ca1404a0-ff77-446c-b0e3-64957736fac1_thumb.jpg" />
        <div className="profile__img">
          <Avatar
            className="profile__avatar1"
            src="https://miro.medium.com/max/3150/1*YSFhp9ko1aFskNJCbXiiNA.jpeg"
          ></Avatar>
        </div>
        <Button size="small" className="editprofile__btn" variant="outlined">
          Edit Profile
        </Button>
        <div className="profile__userdetails">
          <h3> Akaam Zain</h3>

          <p>
            <CakeIcon className="birthday__icon" />
            12 Aug 1998
          </p>
          <br />
          <p>
            <span>43 </span>
            Following
          </p>
          <p>
            <span>44 </span>
            Followers
          </p>
        </div>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          className="profile__tabs"
        >
          <Tab className="profile__tab" label="Bleets" />
          <Tab className="profile__tab" label="Bleets & Replies" />
          <Tab className="profile__tab" label="Media" />
          <Tab className="profile__tab" label="Likes" />
        </Tabs>
      </div>

      {(() => {
        if (selectedTab === 0) {
          return posts.map((post) => (
            <Post
              key={post.id.toString()}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
            />
          ));
        } else if (selectedTab !== 0) {
          return "";
        }
      })()}
    </div>
  );
}

export default Profile;
