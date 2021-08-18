import React from "react";
import { Avatar, Button } from "@material-ui/core";
import "./BleetBox.css";

function BleetBox() {
  return (
    <div className="bleetBox">
      <form>
        <div className="bleetBox__input">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQFa2X0iNTTvgQ/profile-displayphoto-shrink_200_200/0/1616395735382?e=1634169600&v=beta&t=6wuJKcTEzzmvkl-LLorY5NwHl-J2Zbf7ejBUh6rEGfg" />
          <input placeholder="What's on you mind?" />
        </div>
        <input
          className="bleetBox__imageInput"
          placeholder="Optional: Enter image URL"
        />

        <Button class="bleetBox__bleetButton">Bleet</Button>
      </form>
    </div>
  );
}

export default BleetBox;
