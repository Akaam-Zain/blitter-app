import React from "react";
import BleetBox from "./BleetBox";
import Post from "./Post";
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      {/** Header **/}
      <div className="feed__header">
        <h2>Home</h2>
        <BleetBox />
      </div>
      {/** Post **/}

      <Post />
    </div>
  );
}
export default Feed;
