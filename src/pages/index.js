import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ transition }) => (
	<div style={transition && transition.style}>
		<h1>Hi people !</h1>
		<p>Welcome to your new Wise Gatsby site.</p>
		<p>Now go build something great.</p>
		<h1>Go To</h1>
		<ul>
			<li>
				<Link to="/page-2">Page 2</Link>
			</li>
			<li>
				<Link to="/404">404 Error</Link>
			</li>
			<li>
				<Link to="/contact">Contact</Link>
			</li>
			<li>
				<Link to="/thanks">Thanks</Link>
			</li>
		</ul>
	</div>
)

export default IndexPage
