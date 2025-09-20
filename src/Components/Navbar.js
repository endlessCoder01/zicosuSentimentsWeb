/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "Achievements",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <h1 style={{ fontSize: 45, color: "red", fontWeight: "bold" }}>
          ZICOSU
        </h1>
      </div>

      {/* Desktop links */}
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">Achievements</a>
        {/* <a href="/contact">Contact</a> */}
        <Link to="/login" className="primary-button">
          Login
        </Link>
      </div>

      {/* Mobile menu icon */}
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      {/* Drawer for mobile */}
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}

            {/* Divider before Login */}
            <Divider sx={{ my: 1 }} />

            {/* ✅ Login button inside drawer */}
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/login">
                <ListItemText
                  primary="Login"
                  primaryTypographyProps={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;