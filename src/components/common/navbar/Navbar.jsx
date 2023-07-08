import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css"

const drawerWidth = 240;

function Navbar(props) {
  const naviagate = useNavigate()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: "bold" }} onClick={()=>naviagate("/")}>
        Resume Builder
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <NavLink
              exact="true"
              to="/"
              className="navbar-link"
              activeclassname="active"
            >
              Resume Templates
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <NavLink
              to="/my-resumes"
              className="navbar-link"
              activeclassname="active"
            >
              My Resumes
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <NavLink
              to="/about-us"
              className="navbar-link"
              activeclassname="active"
            >
              About Us
            </NavLink>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" style={{ backgroundColor: "#FAF9F6", position:'static' }}>
        <Toolbar>
          <Box
            className="menu-icon"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "red" }}
          >
            <MenuIcon />
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "red",
              fontWeight: "bold",
              cursor:"pointer"
            }}
            onClick={()=>naviagate("/")}
          >
            Resumake
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <span sx={{ color: "#fff" }}>
              <NavLink
                exact="true"
                to="/"
                className="navbar-link"
                activeclassname="active"
              >
                Resume Templates
              </NavLink>
            </span>
            <span sx={{ color: "#fff" }}>
              <NavLink
                to="/my-resumes"
                className="navbar-link"
                activeclassname="active"
              >
                My Resumes
              </NavLink>
            </span>
            <span sx={{ color: "#fff" }}>
              <NavLink
                to="/about-us"
                className="navbar-link"
                activeclassname="active"
              >
                About Us
              </NavLink>
            </span>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
