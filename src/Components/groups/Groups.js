import { IconButton } from "@mui/material";
import "../styles/myStyles.css";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
export default function Users() {
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ ease: "anticipate", duration: 0.3 }}
        className="list-container"
      >
        <div className={"ug-header" + (lightTheme ? "" : " dark")}>
          <img
            src="https://res.cloudinary.com/dbxc4uovd/image/upload/v1711176217/drew-beamer-3SIXZisims4-unsplash-removebg-preview_dimgpe.png"
            alt=""
            style={{ height: "7rem", width: "7rem" }}
          />
          <p className="ug-title">Available Groups</p>
        </div>
        <div className="sb-search">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type="text" placeholder="Search" className="search-box" />
        </div>
        <div className="ug-list">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ cale: 0.98 }}
            className="list-tem"
          >
            <p className="con-icon">T</p>
            <p className="con-title">User</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ cale: 0.98 }}
            className="list-tem"
          >
            <p className="con-icon">T</p>
            <p className="con-title">User</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ cale: 0.98 }}
            className="list-tem"
          >
            <p className="con-icon">T</p>
            <p className="con-title">User</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ cale: 0.98 }}
            className="list-tem"
          >
            <p className="con-icon">T</p>
            <p className="con-title">User</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ cale: 0.98 }}
            className="list-tem"
          >
            <p className="con-icon">T</p>
            <p className="con-title">User</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ cale: 0.98 }}
            className="list-tem"
          >
            <p className="con-icon">T</p>
            <p className="con-title">User</p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
