import React from 'react'
import Helmet from 'react-helmet'
import T from 'i18n-react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const NotFoundPage = ({ pageContext: { lang }, location }) => (
	<Layout path={location.pathname}>
		{T.setTexts(lang)}
		<Helmet title={T.translate('e404.title')} />
		<h1>
			{'{'} {T.translate('e404.header')}
		</h1>
		<p>{T.translate('e404.message')}</p>
		<Link to="/">{T.translate('e404.link')}</Link>
	</Layout>
)

export default NotFoundPage
