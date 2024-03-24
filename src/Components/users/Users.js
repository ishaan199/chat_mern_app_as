import { IconButton } from "@mui/material";
import "../styles/myStyles.css";
import SearchIcon from "@mui/icons-material/Search";
export default function Users() {
  
  return (
    <div className="list-container">
      <div className="ug-header">
        <img
          src="https://res.cloudinary.com/dbxc4uovd/image/upload/v1711176217/drew-beamer-3SIXZisims4-unsplash-removebg-preview_dimgpe.png"
          alt=""
          style={{ height: "7rem", width: "7rem" }}
        />
        <p className="ug-title">Online Users</p>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" placeholder="Search" className="search-box" />
      </div>
      <div className="ug-list">
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">User</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">User</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">User</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">User</p>
        </div>
      </div>
    </div>
  );
}
