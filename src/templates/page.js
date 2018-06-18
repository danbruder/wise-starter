import React from 'react'
import Helmet from 'react-helmet'
import T from 'i18n-react'

import Layout from '../components/layout'

export default ({ pageContext: { html, lang, title }, location }) => (
	<Layout path={location.pathname}>
		<Helmet title={title} />
		{T.setTexts(lang)}
		<div dangerouslySetInnerHTML={{ __html: html }} />
	</Layout>
)
