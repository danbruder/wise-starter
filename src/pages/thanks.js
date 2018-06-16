import React from 'react'
import Helmet from 'react-helmet'
import T from 'i18n-react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ThanksPage = ({ pageContext: { lang }, location }) => (
	<Layout path={location.pathname}>
		{T.setTexts(lang)}
		<div>
			<Helmet title="Thanks" />
			<h1>Thanks</h1>
			<p>Your form has been submitted.</p>
			<Link to="/">Go back to the homepage</Link>
		</div>
	</Layout>
)

export default ThanksPage
