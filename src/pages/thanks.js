import React from 'react'
import Helmet from 'react-helmet'
import T from 'i18n-react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ThanksPage = ({ pageContext: { lang }, location }) => (
	<Layout path={location.pathname}>
		{T.setTexts(lang)}
		<Helmet title={T.translate('thanks.title')} />
		<h1>{T.translate('thanks.header')}</h1>
		<p>{T.translate('thanks.message')}</p>
		<Link to="/">{T.translate('thanks.link')}</Link>
	</Layout>
)

export default ThanksPage
