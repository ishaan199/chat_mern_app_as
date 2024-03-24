import "../styles/myStyles.css";
import SideBar from "../sideBar/SideBar";
import ChatArea from "../chatArea/ChatArea";
import Welcome from "../welcome/Welcome";
import CreateGroups from "../newGroups/CreateGroups";
import Users_groups from "../users/Users";
import { Outlet } from "react-router-dom";
// import WorkArea from "../workArea/WorkArea";
export default function MainContainer() {
  return (
    <div className="main-container">
      <SideBar />
      <Outlet />
      {/* <ChatArea /> */}
      {/* <CreateGroups /> */}
      {/* <Welcome /> */}
      {/* <Users_groups /> */}
    </div>
  );
}
