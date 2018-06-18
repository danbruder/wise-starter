import React from 'react'
import Helmet from 'react-helmet'
import T from 'i18n-react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ThanksPage = ({ pageContext: { lang }, location }) => (
	<Layout path={location.pathname}>
		{T.setTexts(lang)}
		<div>
			<Helmet title={T.translate('Thanks')} />
			<h1>{T.translate('Thanks')}</h1>
			<p>{T.translate('Your form has been submitted')}.</p>
			<Link to="/">{T.translate('Go back to Home page')}</Link>
		</div>
	</Layout>
)

export default ThanksPage
