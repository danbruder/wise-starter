import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'

import T from 'i18n-react'

import Header from '../components/header'
import LangSelect from '../components/langSelect'

import styles from '../styles/layouts'

var dictionary = require('../locales/EN.yml')
const languages = require('../locales/languages')

const Layout = ({ classes, children, data, location, lang }) => (
	<div>
		{lang ? T.setTexts(lang) : T.setTexts(dictionary)}
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
			htmlAttributes={{ lang: `${T.translate('key')}` }}
		/>
		<Header siteTitle={data.site.siteMetadata.title} className={classes.header}>
			<LangSelect location={location.pathname} languages={languages} />
		</Header>
		<div className={classes.wrapper}>{children()}</div>
	</div>
)

Layout.propTypes = {
	children: PropTypes.func
}

export default injectSheet(styles)(Layout)

export const query = graphql`
	query LayoutQuery {
		site {
			siteMetadata {
				title
				author
				description
			}
		}
	}
`
