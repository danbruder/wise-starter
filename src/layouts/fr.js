import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'

import T from 'i18n-react'
var dictionary = require('../locales/FR.yml')

import Header from '../components/header'

import styles from '../styles/layouts'

const Layout = ({ classes, children, data, location }) => (
	<div>
		{T.setTexts(dictionary)}
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
		<Header
			siteTitle={data.site.siteMetadata.title}
			location={location.pathname}
			className={classes.header}
		/>
		<div className={classes.wrapper}>{children()}</div>
	</div>
)

Layout.propTypes = {
	children: PropTypes.func
}

export default injectSheet(styles)(Layout)

export const query = graphql`
	query SiteMetadataQueryFR {
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
