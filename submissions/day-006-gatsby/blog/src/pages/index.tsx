import React from "react";
import { graphql } from "gatsby";
import Typography from "@material-ui/core/Typography";
import Layout from "../components/layout";
import { BlogListItem } from "../components/blog-list-item";
import "./index.css";

const BlogPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const posts = edges.map((edge) => edge.node);

  return (
    <Layout>
      <div className="blog-page">
        <Typography variant="h3" component="h1">
          Blog articles
        </Typography>
        <ul>
          {posts.map((post) => (
            <BlogListItem key={post.id} {...post} />
          ))}
        </ul>
      </div>
    </Layout>
  );
};
export const pageQuery = graphql`
  query {
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
            title
            date
            path
          }
          excerpt
        }
      }
    }
  }
`;

export default BlogPage;
