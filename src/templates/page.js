import React from 'react'

export default function Template({ data, transition }) {
	const { markdownRemark } = data
	const { frontmatter, html } = markdownRemark
	return (
		<div style={transition && transition.style}>
			<div dangerouslySetInnerHTML={{ __html: html }} />
		</div>
	)
}

export const pageQuery = graphql`
	query PageByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				path
				title
			}
		}
	}
`
