import { Link } from "gatsby";
import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import Brightness4Icon from "@material-ui/icons/Brightness4";

const Header = ({ siteTitle, theme, setTheme }) => {
  return (
    <AppBar position="static" color={theme === "light" ? "primary" : "inherit"}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            {siteTitle}
          </Link>
        </Typography>
        <IconButton
          style={{ color: "white" }}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <Brightness4Icon /> : <Brightness5Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
