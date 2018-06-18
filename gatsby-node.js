/**
 * Gatsby's Node APIs.
 * https://www.gatsbyjs.org/docs/node-apis/
 **/

const path = require('path')

const languages = require('./src/locales/languages')

exports.onCreateBabelConfig = ({ actions: { setBabelPlugin } }) => {
	setBabelPlugin({ name: 'babel-plugin-tailwind' })
}

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions
	return graphql(`
		{
			allMarkdownRemark {
				edges {
					node {
						html
						frontmatter {
							title
							template
							path
							lang
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
				path:
					languages.keys[node.frontmatter.lang].prefix + node.frontmatter.path,
				component: path.resolve(
					`src/templates/${String(node.frontmatter.template)}.js`
				),
				context: {
					html: node.html,
					lang: languages.keys[node.frontmatter.lang],
					title: node.frontmatter.title
				}
			})
		})
	})
}

exports.onCreatePage = ({ page, actions }) => {
	const { createPage, deletePage } = actions
	return new Promise(resolve => {
		const oldPage = Object.assign({}, page)
		deletePage(oldPage)
		Object.entries(languages.keys).map(([key, value]) => {
			page.path = value.prefix + page.path
			page.context = {
				lang: value
			}
			createPage(page)
		})
		resolve()
	})
}
