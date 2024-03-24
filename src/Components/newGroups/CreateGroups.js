import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { IconButton } from "@mui/material";
export default function CreateGroups() {
  return (
    <div className="createGroups-container">
      <input
        type="text"
        placeholder="Enter Group Name"
        className="search-box"
      />
      <IconButton>
        <DoneOutlineIcon />
      </IconButton>
    </div>
  );
}
