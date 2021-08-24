import React, { useState, useEffect } from "react";
import BleetBox from "./BleetBox";
import Post from "./Post";
import "./stlyes/Feed.css";
import db from "../firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
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
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id.toString()}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}
export default Feed;
