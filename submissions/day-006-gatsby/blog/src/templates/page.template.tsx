import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import "./page.template.css";

import MarkdownIt from "markdown-it";

export default function PageTemplate({ data }) {
  const { strapiPost } = data;
  const { body } = strapiPost;
  const md = new MarkdownIt();

  return (
    <Layout>
      <div className="blog-post-container">
        <div style={{ width: 300, flexShrink: 0 }} />
        <div className="blog-post">
          <h1>{strapiPost.title}</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: md.render(body) }}
          />
        </div>
        <div style={{ width: 300, flexShrink: 0 }} />
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query($slug: String!) {
    strapiPost(slug: { eq: $slug }) {
      id
      title
      body
      slug
      header_image {
        publicURL
      }
    }
  }
`;
