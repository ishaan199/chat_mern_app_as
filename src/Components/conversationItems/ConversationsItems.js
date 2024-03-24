import { useNavigate } from "react-router-dom";

export default function ConversationsItems({ convo }) {
    const navigate = useNavigate();
  return (
    <div
      className="conversation-container"
      onClick={() => {
        navigate("chat");
      }}
     >
      <p className="con-icon">{convo.name[0]}</p>
      <p className="con-title">{convo.name}</p>
      <p className="con-lastMessage">{convo.lastMessage}</p>
      <p className="con-timeStamp">{convo.timeStamp}</p>
    </div>
  );
}
