const root = require("../../submissions-root");
console.log(root.submissionsRoot);
module.exports = {
  siteMetadata: {
    title: `Eric Polman - #thirtydaysofcode blog`,
    description: `A blog containing submissions for my personal #thirtydaysofcode challenge.`,
    author: `@ericpolman`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/../../`,
        // We want to ignore the blog folder here, as including this will cause a
        // log spam "info added directory at ... and the files come from other directories anyway.
        ignore: ["/**/blog/**"],
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
