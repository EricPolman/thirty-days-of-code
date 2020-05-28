/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);

async function createFromMarkdown(createPage, graphql, reporter) {
  const blogPostTemplate = path.resolve(`src/templates/blog.template.tsx`);
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/day-[0-9]{3}-[a-zA-Z0-9-]+/README.md/" }
        }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            fileAbsolutePath
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    });
  });
}

async function createFromStrapi(createPage, graphql, reporter) {
  const pageTemplate = path.resolve(`src/templates/page.template.tsx`);
  const result = await graphql(`
    {
      allStrapiPost {
        nodes {
          id
          slug
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allStrapiPost.nodes.forEach((node) => {
    createPage({
      path: node.slug,
      component: pageTemplate,
      context: { slug: node.slug }, // additional data can be passed via context
    });
  });
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  createFromMarkdown(createPage, graphql, reporter);
  createFromStrapi(createPage, graphql, reporter);
};
