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
			if (node.frontmatter.langKey === languages.default.key) {
				createPage({
					path: node.frontmatter.path,
					component: path.resolve(
						`src/templates/${String(node.frontmatter.template)}.js`
					),
					context: {
						html: node.html,
						lang: languages.default.value
					}
				})
			} else {
				createPage({
					path: '/' + node.frontmatter.langKey + node.frontmatter.path,
					component: path.resolve(
						`src/templates/${String(node.frontmatter.template)}.js`
					),
					context: {
						html: node.html,
						lang: languages.keys[node.frontmatter.langKey]
					}
				})
			}
		})
	})
}

exports.onCreatePage = ({ page, actions }) => {
	const { createPage, deletePage } = actions
	return new Promise(resolve => {
		const oldPage = Object.assign({}, page)
		page.context = {
			lang: languages.default.value
		}
		deletePage(oldPage)
		createPage(page)
		var shouldGenerate = true
		Object.entries(languages.keys).map(([key, value]) => {
			if (key == page.path.split('/')[0]) {
				shouldGenerate = false
			}
		})
		if (shouldGenerate) {
			Object.entries(languages.keys).map(([key, value]) => {
				const newPage = Object.assign({}, page)
				newPage.path = '/' + key + page.path
				newPage.context = {
					lang: value
				}
				createPage(newPage)
			})
		}
		resolve()
	})
}
