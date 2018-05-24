module.exports = {
	siteMetadata: {
		title: 'Wise Starter',
		author: 'Tom Pichaud',
		description: 'Starter for Gatsby on netlify.',
		lang: 'en',
		siteUrl: 'https://wise-starter.netlify.com'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-typography',
			options: {
				pathToConfigModule: `src/utils/typography.js`
			}
		},
		'gatsby-plugin-jss',
		{
			resolve: 'gatsby-plugin-favicon',
			options: {
				logo: './src/assets/icon.png',
				injectHTML: true,
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					firefox: true,
					twitter: false,
					yandex: false,
					windows: false
				}
			}
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'WiseStarter',
				short_name: 'WiseStarter',
				start_url: '/',
				background_color: '#0E283F',
				theme_color: '#582644',
				display: 'minimal-ui',
				icon: 'src/assets/icon.png'
			}
		},
		'gatsby-plugin-sitemap',
		'gatsby-plugin-offline'
	]
}
