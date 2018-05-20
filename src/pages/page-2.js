import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

const SecondPage = ({ transition }) => (
	<div style={transition && transition.style}>
		<Helmet title="Page 2" />
		<h1>Hi from the second page</h1>
		<p>Welcome to page 2</p>
		<Link to="/">Go back to the homepage</Link>
	</div>
)

export default SecondPage
