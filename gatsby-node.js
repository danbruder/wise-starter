/**
 * Gatsby's Node APIs.
 * https://www.gatsbyjs.org/docs/node-apis/
 **/

const path = require('path')
const languages = require('./src/locales/languages')

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
							langKey
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
			if (node.frontmatter.langKey == languages.defaultKey) {
				createPage({
					path: node.frontmatter.path,
					component: path.resolve(
						`src/templates/${String(node.frontmatter.template)}.js`
					),
					context: {}
				})
			} else {
				createPage({
					path: '/' + node.frontmatter.langKey + node.frontmatter.path,
					component: path.resolve(
						`src/templates/${String(node.frontmatter.template)}.js`
					),
					context: {}
				})
			}
		})
	})
}

exports.onCreatePage = ({ page, boundActionCreators }) => {
	const { createPage } = boundActionCreators

	const langs = languages.keys

	if (!langs.includes(page.path.split('/')[0])) {
		return new Promise(resolve => {
			const newPage = Object.assign({}, page)
			langs.map(lang => {
				newPage.path = '/' + lang + page.path
				createPage(newPage)
			})
			resolve()
		})
	}
}
