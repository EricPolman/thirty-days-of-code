import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Button } from "@material-ui/core";
import "./blog.template.css";

const githubBaseUrl =
  "https://github.com/EricPolman/thirty-days-of-code/tree/master";

export default function BlogTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html, fileAbsolutePath } = markdownRemark;

  const githubPath = `${githubBaseUrl}/submissions/${fileAbsolutePath
    .split("/submissions/")[1]
    .replace("/README.md", "")}`;
  console.log(githubPath);

  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <div>
            <ul className="blog-post-header-list">
              <li>
                <Button
                  color="primary"
                  size="small"
                  variant="contained"
                  onClick={() => window.history.back()}
                >
                  Go back
                </Button>
              </li>
              <li>{frontmatter.date}</li>
              <li>
                <Button
                  href={githubPath}
                  color="primary"
                  size="small"
                  variant="contained"
                  target="_blank"
                >
                  Code on GitHub
                </Button>
              </li>
            </ul>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      fileAbsolutePath
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
