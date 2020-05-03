import { Link } from "gatsby";
import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = ({ siteTitle }) => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="h6">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          {siteTitle}
        </Link>
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
