import React from "react";
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

function CommentDialog({ postId }) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            <Avatar
              className="user__avatar"
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
            />
            <div className="bleet__author">
              <Typography className="bleet__authorName">
                Jessie Jackson<span>@Jessie</span>{" "}
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
              <Typography>replying to @AkaamZain</Typography>
            </div>
          </DialogContent>
          <DialogContent className="reply__dialog">
            <Avatar
              className="user__avatar"
              src="data:image/jpeg;base64,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"
            />

            <TextField
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
            <Button autoFocus onClick={handleClose} color="primary">
              Reply
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
export default CommentDialog;
