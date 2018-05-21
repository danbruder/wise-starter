import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

const ThanksPage = ({ transition }) => (
	<div style={transition && transition.style}>
		<Helmet title="Thanks" />
		<h1>Thanks</h1>
		<p>Your form has been submitted.</p>
		<Link to="/">Go back to the homepage</Link>
	</div>
)

export default ThanksPage
