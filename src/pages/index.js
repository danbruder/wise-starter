import React from 'react'
import T from 'i18n-react'
import Layout from '../components/layout'
import Link from '../components/link'

const seo = {
	title: 'Index Page',
	description: 'My Story'
}

const IndexPage = ({ pageContext: { lang }, location }) => (
	<Layout location={location.pathname} seo={seo}>
		{T.setTexts(lang)}
		<h1>Hi people !</h1>
		<p>{T.translate('hello')}</p>
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
				<Link to="/obliviate">Obliviate</Link>
			</li>
			<li>
				<Link to="/thanks">Thanks</Link>
			</li>
			<li>
				<Link to="/legal">Legal</Link>
			</li>
		</ul>
	</Layout>
)

export default IndexPage
