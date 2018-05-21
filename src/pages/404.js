import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

const NotFoundPage = ({ transition }) => (
	<div style={transition && transition.style}>
		<Helmet title="404" />
		<h1>NOT FOUND</h1>
		<p>You just hit a route that doesn&#39;t exist... the sadness!</p>
		<Link to="/">Go back to the homepage</Link>
	</div>
)

export default NotFoundPage
