module.exports = {
  pathPrefix: "/thirty-days-of-code/blog/",
  siteMetadata: {
    title: `Eric Polman - #thirtydaysofcode blog`,
    description: `A blog containing submissions for my personal #thirtydaysofcode challenge.`,
    author: `@ericpolman`,
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-material-ui",
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
        name: `eric-polman-dev-blog`,
        short_name: `polman-blog`,
        start_url: `/`,
      },
    },
  ],
};
