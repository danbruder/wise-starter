import React from 'react'

import Layout from '../components/layout'

export default ({ pageContext: { html, lang }, location }) => (
	<Layout location={location.pathname} lang={lang}>
		<div dangerouslySetInnerHTML={{ __html: html }} />
	</Layout>
)
