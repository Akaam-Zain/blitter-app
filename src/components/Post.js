import React, { forwardRef, useState } from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@material-ui/icons/VerifiedUser";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Publish from "@material-ui/icons/Publish";
import "./stlyes/Post.css";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import CommentDialog from "./CommentDialog";
import firebase from "firebase";
import db from "../firebase";

const Post = forwardRef(
  (
    { postId, displayName, username, verified, text, image, avatar, like },
    ref
  ) => {
    const ethereum_reg = /0x[a-fA-F0-9]{40}/;
    let split_text = text.split(" ");

    // const posts = useSelector((state) =>
    //   state.post.find(([]) => element === postId)
    // );
    // console.log(posts);

    const [isLiked, setlike] = useState(like);

    function handleLike() {
      if (!isLiked) {
        db.collection("posts").doc(postId).update({
          like: true,
        });

        setlike(true);
      } else {
        db.collection("posts").doc(postId).update({
          like: false,
        });

        setlike(false);
      }
    }

    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />{" "}
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}
                <span>
                  {verified && <VerifiedIcon className="post__badge" />}

                  <span className="post__username">{username}</span>
                </span>
              </h3>
            </div>

            <div className="post__description">
              {split_text.map((split) => {
                if (split.match(ethereum_reg)) {
                  return (
                    <Link
                      className="ethereum__address"
                      style={{ display: "inline" }}
                    >
                      {split}{" "}
                    </Link>
                  );
                } else {
                  return (
                    <Typography style={{ display: "inline" }}>
                      {split}{" "}
                    </Typography>
                  );
                }
              })}{" "}
            </div>
          </div>
          <img className="post__img" src={image} alt="" />
          <div className="post__footer">
            <CommentDialog
              postId={postId}
              displayName={displayName}
              username={username}
              avatar={avatar}
              text={text}
              verified={verified}
            />
            <RepeatIcon />
            <FavoriteBorderIcon
              onClick={handleLike}
              style={{
                color: isLiked ? "red" : "",
              }}
            />
            <Publish />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
