module.exports = {
	siteMetadata: {
		title: 'Wise Starter',
		author: 'Tom Pichaud',
		description: 'Starter for Gatsby on netlify.',
		siteUrl: 'https://wise-starter.netlify.com',
		facebookAppID: '',
		twitterSiteID: '',
		twitterUserID: ''
	},
	plugins: [
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: `${__dirname}/src/pages/`
			}
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: ['gatsby-remark-autolink-headers']
			}
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-emotion',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Wise Starter',
				short_name: 'Wise Starter',
				start_url: '/',
				background_color: '#0E283F',
				theme_color: '#582644',
				display: 'minimal-ui',
				icon: 'src/assets/icon.png'
			}
		},
		'gatsby-plugin-sitemap',
		'gatsby-plugin-offline',
		'gatsby-plugin-netlify'
	]
}
