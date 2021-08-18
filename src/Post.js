import React from "react";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@material-ui/icons/VerifiedUser";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Publish from "@material-ui/icons/Publish";
import "./Post.css";

function Post({
  displayName,
  userName,
  verified,
  timestamp,
  text,
  image,
  avatar,
}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQFa2X0iNTTvgQ/profile-displayphoto-shrink_200_200/0/1616395735382?e=1634169600&v=beta&t=6wuJKcTEzzmvkl-LLorY5NwHl-J2Zbf7ejBUh6rEGfg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Akaam Zain{" "}
              <span>
                <VerifiedIcon className="post__badge" />
              </span>
            </h3>
          </div>
          <div className="post__description">
            <p>I challenge you to build a Blitter Clone</p>
          </div>
          <img
            src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
            alt="challenge-meme"
          />
        </div>
      </div>
      <div className="post__footer">
        <FavoriteBorderIcon />
        <Publish />
        <RepeatIcon />
      </div>
    </div>
  );
}

export default Post;
