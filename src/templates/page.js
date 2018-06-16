import React from 'react'
import T from 'i18n-react'

import Layout from '../components/layout'

export default ({ pageContext: { html, lang }, location }) => (
	<Layout path={location.pathname}>
		{T.setTexts(lang)}
		<div dangerouslySetInnerHTML={{ __html: html }} />
	</Layout>
)
