import React from "react";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Publish from "@material-ui/icons/Publish";
import "./Post.css";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
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
            <p>{text}</p>
          </div>
        </div>
        <img className="post__img" src={image} alt="challenge-meme" />
        <div className="post__footer">
          <ChatBubbleOutlineIcon />
          <FavoriteBorderIcon />
          <Publish />
          <RepeatIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;
