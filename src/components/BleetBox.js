import React, { useState, useEffect } from "react";
import { Avatar, Button } from "@material-ui/core";
import "./stlyes/BleetBox.css";
import db from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import firebase from "firebase";
import { useHistory } from "react-router";

function BleetBox() {
  const [bleetMessage, setBleetMessage] = useState("");
  const [bleetImage, setBleetImage] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const history = useHistory();
  const photoURL = user?.photoURL;

  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");
    fetchUserName();
  }, [user, loading]);

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: name,
      username: user?.displayName,
      verified: true,
      text: bleetMessage,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      image: bleetImage,
      avatar: photoURL,
    });

    setBleetMessage("");
    setBleetImage("");
  };

  return (
    <div className="bleetBox">
      <form>
        <div className="bleetBox__input">
          <Avatar src={photoURL} />

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

        <Button className="bleetBox__bleetButton" onClick={sendTweet}>
          Bleet
        </Button>
      </form>
    </div>
  );
}

export default BleetBox;
