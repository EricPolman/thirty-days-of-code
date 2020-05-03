/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

import { useStaticQuery, graphql } from "gatsby";
import "./layout.css";

import Header from "./header";

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
  },
});

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;