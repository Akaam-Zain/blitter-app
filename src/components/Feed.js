import React, { useState, useEffect } from "react";
import BleetBox from "./BleetBox";
import Post from "./Post";
import "./stlyes/Feed.css";
import db from "../firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const regex = /#+([a-zA-Z0-9_]+)/gi;
  const text = "hello this is a test. #hello #hashtags #one #two";
  console.log("input text: " + text);
  var newText = text.match(regex);
  console.log(newText);

  const ethereum_reg = /0x[a-fA-F0-9]{40}/;
  const eth_text =
    "0x00000000219ab540356cbb839cbe05303d7705fa heal the world make it a better placeeee";
  var ethMatch = eth_text.match(ethereum_reg);
  console.log(ethMatch);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
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
            key={post.id}
            id={post.id}
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
