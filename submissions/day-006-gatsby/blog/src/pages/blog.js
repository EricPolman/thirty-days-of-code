import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogListItem = (post) => {
  const { title, date, path } = post.frontmatter;
  return (
    <li key={path}>
      <Link to={path}>{title}</Link>
      <em>{date}</em>
      <p>{post.excerpt}</p>
    </li>
  );
};

const BlogPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const posts = edges.map((edge) => edge.node);

  console.log(posts);

  return (
    <Layout>
      <SEO title="Blog" />
      <ul>
        {posts.map((post) => (
          <BlogListItem {...post} />
        ))}
      </ul>
    </Layout>
  );
};
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/day-[0-9]{3}-[a-zA-Z0-9-]+/README.md/" }
      }
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
