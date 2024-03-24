import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import MessageOthers from "../messageOther/MessageOthers";
import MessageSelf from "../messageSelf/MessageSelf";
export default function ChatArea({props}) {
  return (
    <div className="chatArea-container">
      <div className="chatArea-header">
        <p className="con-icon">t</p>
        <div className="header-text">
          <div className="con-title">test</div>
          <div className="con-timeStamp">today</div>
        </div>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
      <div className="message-container">
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
      </div>
      <div className="text-input-area">
        <input
          type="text"
          placeholder="Type a message"
          className="search-box"
        />
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
}
