import React from "react";
import { AppBar, Toolbar, Typography, Button, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import avatar from "../images/image-avatar.png";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          BBC Focusmate
        </Typography>
        <Button color="inherit">Invite</Button>
        <Button color="inherit">Help</Button>
        <Avatar alt="avatar" src={avatar} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
