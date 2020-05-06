/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";
import { useLocalState } from "../hooks/useLocalState";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import "./layout.css";

import Header from "./header";

const lightTheme = createMuiTheme({
  palette: {
    primary: deepPurple,
    type: "light",
  },
});

const darkTheme = createMuiTheme({
  palette: {
    primary: deepPurple,
    type: "dark",
  },
});

const Layout = ({ children }) => {
  const [theme, setTheme] = useLocalState("theme", "light");
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
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Helmet>
        <body className={`${theme}-theme`} />
      </Helmet>
      <Header
        siteTitle={data.site.siteMetadata.title}
        theme={theme}
        setTheme={setTheme}
      />
      <div className={`page-container`}>
        <main>{children}</main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
