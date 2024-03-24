export default function MessageSelf() {
  var props2 = { name: "you", message: "this is simple message" };
  return (
    <div className="self-message-container">
      <div className="message-box">
        <p>{props2.message}</p>
        <p className="self-timeStamp">12:00am</p>
      </div>
    </div>
  );
}
