import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'

const Layout = ({ children, data }) => (
	<div>
		<Helmet
			titleTemplate={`%s | ${data.site.siteMetadata.title}`}
			defaultTitle={data.site.siteMetadata.title}
			meta={[
				{
					name: 'author',
					content: `${data.site.siteMetadata.author}`
				},
				{
					name: 'description',
					content: `${data.site.siteMetadata.description}`
				}
			]}
			htmlAttributes={{ lang: `${data.site.siteMetadata.lang}` }}
		/>
		<Header siteTitle={data.site.siteMetadata.title} />
		<div
			style={{
				margin: '0 auto',
				maxWidth: 960,
				padding: '1.45rem 1.0875rem'
			}}>
			{children()}
		</div>
	</div>
)

Layout.propTypes = {
	children: PropTypes.func
}

export default Layout

export const query = graphql`
	query SiteMetadataQuery {
		site {
			siteMetadata {
				title
				author
				description
				lang
			}
		}
	}
`
