module.exports = {
	siteMetadata: {
		title: 'Gatsby Default Starter'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-favicon`,
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
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'WiseStarter',
				short_name: 'WiseStarter',
				start_url: '/',
				background_color: '#0E283F',
				theme_color: '#582644',
				display: 'minimal-ui',
				icon: 'src/assets/icon.png'
			}
		}
	]
}
