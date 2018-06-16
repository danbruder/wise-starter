import React from 'react'
import Helmet from 'react-helmet'
import T from 'i18n-react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const NotFoundPage = ({ pageContext: { lang }, location }) => (
	<Layout path={location.pathname}>
		{T.setTexts(lang)}
		<div>
			<Helmet title="404" />
			<h1>NOT FOUND</h1>
			<p>You just hit a route that doesn&#39;t exist... the sadness!</p>
			<Link to="/">Go back to the homepage</Link>
		</div>
	</Layout>
)

export default NotFoundPage
