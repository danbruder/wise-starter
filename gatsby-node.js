/**
 * Gatsby's Node APIs.
 * https://www.gatsbyjs.org/docs/node-apis/
 **/

const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
	const { createPage } = boundActionCreators

	return graphql(`
		{
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							template
							path
						}
					}
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			return Promise.reject(result.errors)
		}

		result.data.allMarkdownRemark.edges.forEach(({ node }) => {
			createPage({
				path: node.frontmatter.path,
				component: path.resolve(
					`src/templates/${String(node.frontmatter.template)}.js`
				),
				context: {}
			})
		})
	})
}
