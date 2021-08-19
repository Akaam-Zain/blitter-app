import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import "./BleetBox.css";
import db from "./firbebase";

function BleetBox() {
  const [bleetMessage, setBleetMessage] = useState("");
  const [bleetImage, setBleetImage] = useState("");

  const sendBleet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Akaam Zain",
      username: "@akaamzain",
      verified: true,
      text: { bleetMessage },
      image: { bleetImage },
      avatar:
        "https://media-exp1.licdn.com/dms/image/C5603AQFa2X0iNTTvgQ/profile-displayphoto-shrink_200_200/0/1616395735382?e=1634169600&v=beta&t=6wuJKcTEzzmvkl-LLorY5NwHl-J2Zbf7ejBUh6rEGfg",
    });

    setBleetMessage("");
    setBleetImage("");
  };

  return (
    <div className="bleetBox">
      <form>
        <div className="bleetBox__input">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQFa2X0iNTTvgQ/profile-displayphoto-shrink_200_200/0/1616395735382?e=1634169600&v=beta&t=6wuJKcTEzzmvkl-LLorY5NwHl-J2Zbf7ejBUh6rEGfg" />
          <input
            onChange={(e) => setBleetMessage(e.target.value)}
            value={bleetMessage}
            placeholder="What's on you mind?"
          />
        </div>
        <input
          value={bleetImage}
          onChange={(e) => setBleetImage(e.target.value)}
          className="bleetBox__imageInput"
          placeholder="Optional: Enter image URL"
        />

        <Button onClick={sendBleet} className="bleetBox__bleetButton">
          Bleet
        </Button>
      </form>
    </div>
  );
}

export default BleetBox;
