import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Publish from "@material-ui/icons/Publish";
import "./stlyes/Post.css";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import CommentDialog from "./CommentDialog";

const Post = forwardRef(
  ({ id, displayName, username, verified, text, image, avatar }, ref) => {
    const ethereum_reg = /0x[a-fA-F0-9]{40}/;
    let split_text = text.split(" ");

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
              postId={id}
              displayName={displayName}
              username={username}
              avatar={avatar}
            />
            <RepeatIcon />
            <FavoriteBorderIcon />
            <Publish />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
