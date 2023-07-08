import React, { useState } from "react";
import "./Sidebar.css";
import { Paper } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const step = useSelector((state) => state.step.step);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="sidebar">
        <Paper className="sidebar-container">
          <div
            className={`sidebar-item ${
              step === 1 ? "sidebar-selected-item" : ""
            }`}
          >
            Personal Info
          </div>
          <div
            className={`sidebar-item ${
              step === 2 ? "sidebar-selected-item" : ""
            }`}
          >
            Education
          </div>
          <div
            className={`sidebar-item ${
              step === 3 ? "sidebar-selected-item" : ""
            }`}
          >
            Work Experience
          </div>
          <div
            className={`sidebar-item ${
              step === 4 ? "sidebar-selected-item" : ""
            }`}
          >
            Key Skills
          </div>
        </Paper>
      </div>

      {/* Small Screen */}
      <div className="small-sidebar">
        <MenuIcon
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ cursor: "pointer" }}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={handleClose}
            sx={{ color: step === 1 ? "blue" : "inherit" }}
          >
            Personal Info
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{ color: step === 2 ? "blue" : "inherit" }}
          >
            Education
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{ color: step === 3 ? "blue" : "inherit" }}
          >
            Work Experience
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{ color: step === 4 ? "blue" : "inherit" }}
          >
            Key Skills
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default Sidebar;
