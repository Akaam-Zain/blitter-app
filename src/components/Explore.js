import { div } from "prelude-ls";
import React from "react";
import Post from "./Post";
import FlipMove from "react-flip-move";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

import "./stlyes/Explore.css";

function Explore() {
  const posts = useSelector((state) => state.post);

  return (
    <div className="explore">
      {console.log("This is explore")}

      {posts.map((post) => {
        console.log(post.avatar, post, post.verified);

        return (
          <Post
            key={"12"}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={""}
            avatar={post.photoURL}
            image={post.image}
          />
        );
      })}
    </div>
  );
}

export default Explore;
