import React from "react";
import { useSelector } from "react-redux";
import { TextField } from "@material-ui/core";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { Typography, Button } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import CloseIcon from "@material-ui/icons/CloseTwoTone";
import { Image } from "@material-ui/icons";
import GifIcon from "@material-ui/icons/Gif";
import PollIcon from "@material-ui/icons/Poll";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import "./stlyes/CommentDialog.css";
import db from "../firebase";
import firebase from "firebase";

function CommentDialog({ postId, displayName, username, avatar, text }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef();
  let comment_input;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const commentReplyHandler = () => {
    // get the comment in put
    comment_input = ref?.current?.value;

    //add it to the post comment object

    db.collection("posts")
      .doc(postId)
      .update({
        comment: firebase.firestore.FieldValue.arrayUnion(comment_input),
      });
  };
  const user = useSelector((state) => state.user);

  return (
    <div>
      <ChatBubbleOutlineIcon onClick={handleClickOpen} />
      <div>
        <Dialog fullWidth onClose={handleClose} open={open}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            <CloseIcon className="close__dialog" onClick={handleClose} />
          </DialogTitle>
          <Divider></Divider>
          <DialogContent className="reply__dialog">
            <Avatar className="user__avatar" src={avatar} />
            <div className="bleet__author">
              <Typography className="bleet__authorName">
                Jessie Jackson<span>@Jessie</span>{" "}
              </Typography>
              <Typography>{text}</Typography>
              <Typography>replying to @AkaamZain</Typography>
            </div>
          </DialogContent>
          <DialogContent className="reply">
            <Avatar src={user[0].photoURL} />

            <TextField
              inputRef={ref}
              className="bleet__reply"
              multiline
              style={{ textDecoration: "none" }}
              InputProps={{ disableUnderline: true }}
              fullWidth
              placeholder="Bleet your reply"
            />
          </DialogContent>

          <DialogActions className="reply__actions">
            <div>
              <Image className="reply__icons" />
              <GifIcon className="reply__icons" />
              <PollIcon className="reply__icons" />
              <EmojiEmotionsIcon className="reply__icons" />
              <InsertInvitationIcon className="reply__icons" />
            </div>
            <Button
              autoFocus
              onClick={() => {
                handleClose();
                commentReplyHandler();
              }}
              color="primary"
            >
              Reply
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
export default CommentDialog;
