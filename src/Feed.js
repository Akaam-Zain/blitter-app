import React, { useState, useEffect } from "react";
import BleetBox from "./BleetBox";
import Post from "./Post";
import "./Feed.css";
import db from "./firbebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      {/** Header **/}
      <div className="feed__header">
        <h2>Home</h2>
        <BleetBox />
      </div>
      {/** Post **/}
      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          userName={post.username}
          verified={post.verified}
          text={post.text}
          image={post.image}
          avatar={post.avatar}
        />
      ))}
    </div>
  );
}
export default Feed;
