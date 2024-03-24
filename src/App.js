import "./App.css";
import Login from "./Components/login/Login";
import MainContainer from "./Components/mainContainer/MainContainer";
import { Routes, Route } from "react-router-dom";
import Welcome from "./Components/welcome/Welcome";
import ChatArea from "./Components/chatArea/ChatArea";
import CreateGroups from "./Components/newGroups/CreateGroups";
import Users from "./Components/users/Users";
import Groups from "./Components/groups/Groups";
function App() {
  return (
    <div className="App">
      {/* <MainContainer/> */}
      {/* <Login/> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<Welcome />}></Route>
          <Route path="chat" element={<ChatArea />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="groups" element={<Groups/>}></Route>
          <Route path="create-groups" element={<CreateGroups />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
