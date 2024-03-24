import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Welcome() {
  const lisghtTheme = useSelector((state) => state.themekey);
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);
  const nav = useNavigate();
  if (!userData) {
    console.log("User not authenticated");
    nav("/");
  }
  return (
    <div className={"welcome-container" + (lisghtTheme ? "" : " dark")}>
      <motion.img
        drag
        whileTap={{ scale: 1.05, rotate: 360 }}
        src="https://res.cloudinary.com/dbxc4uovd/image/upload/v1711176217/drew-beamer-3SIXZisims4-unsplash-removebg-preview_dimgpe.png"
        alt=""
        className="welcome-logo"
      />
      <b>Hi , {userData.data.name}</b>
      <p>View and Text directlyto people to presentin the chat rooms</p>
    </div>
  );
}
