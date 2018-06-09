import React from 'react'
import Helmet from 'react-helmet'
import T from 'i18n-react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = ({ pageContext: { lang }, location }) => (
	<Layout location={location.pathname}>
		{T.setTexts(lang)}
		<div>
			<Helmet title="Page 2" />
			<h1>Hi from the second page</h1>
			<p>Welcome to page 2</p>
			<Link to="/">Go back to the homepage</Link>
		</div>
	</Layout>
)

export default SecondPage
