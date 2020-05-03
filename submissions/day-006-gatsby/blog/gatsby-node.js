/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const mdFileQuery = `{
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/day-[0-9]{3}-[a-zA-Z0-9-]+/README.md/"}}) {
    edges {
      node {
        id
        fileAbsolutePath
      }
    }
  }
}
`

exports.createPages = ({ actions }) => {
  const { createPage } = actions
}
