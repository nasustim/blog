import { MarkdownRenderer } from "@/components/organisms/markdown-renderer";
import { CommonHead } from "@/components/organisms/meta/common-head";
import { Template } from "@/components/templates";
import { type HeadFC, type PageProps, graphql, useStaticQuery } from "gatsby";

const EntryPage: React.FC<PageProps<Queries.EntryPageQuery>> = ({ data }) => {
	if (!data.markdownRemark) {
		return <></>;
	}
	const { frontmatter, rawMarkdownBody } = data.markdownRemark;

	return (
		<Template>
			<main>
				<MarkdownRenderer
					title={frontmatter?.title ?? ""}
					date={frontmatter?.date ?? undefined}
					markdown={rawMarkdownBody ?? ""}
				/>
			</main>
		</Template>
	);
};

export default EntryPage;

export const pageQuery = graphql`
  query EntryPage ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      rawMarkdownBody
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
    site {
      siteMetadata {
        title
        description
        siteUrl 
      }
    }
  }
`;

export const Head: HeadFC<Queries.EntryPageQuery> = ({data}) => {
const articleTitle = data?.markdownRemark?.frontmatter?.title ?? ''
const siteTitle = data?.site?.siteMetadata?.title ?? ''

const slug = data?.markdownRemark?.frontmatter?.slug ?? ''
const siteUrl = data?.site?.siteMetadata?.siteUrl ?? ''

  return <CommonHead 
    title={`${articleTitle} | ${siteTitle}`}
    siteUrl={`${siteUrl}/entry${slug}`}
  />
}
