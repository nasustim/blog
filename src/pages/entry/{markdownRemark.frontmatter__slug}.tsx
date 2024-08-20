import * as React from "react";
import { type PageProps, graphql } from "gatsby";

export const BlogPostTemplate: React.FC<PageProps<Queries.EntryPageQuery>> = ({ data }) => {
  if (!data.markdownRemark) {
    return <></>
  }
  const { frontmatter, html } = data.markdownRemark;

  return (
    <div>
      <div>
        <h1>{frontmatter?.title}</h1>
        <h2>{frontmatter?.date}</h2>
        <div dangerouslySetInnerHTML={{ __html: html ?? '' }} />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query EntryPage ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
