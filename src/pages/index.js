import React from 'react'
import Helmet from 'react-helmet'
import T from 'i18n-react'

import Layout from '../components/layout'
import Link from '../components/link'

const seo = {
	title: 'Home Page',
	description: 'That is a Wise Story'
}

const IndexPage = ({ pageContext: { lang }, location }) => (
	<Layout path={location.pathname} seo={seo}>
		<Helmet title="Home" />
		{T.setTexts(lang)}
		<h1>{T.translate('Welcome')} !</h1>
		<p>
			{T.translate('Welcome to your new')}{' '}
			<a
				href="https://github.com/TomPichaud/wise-starter"
				target="_blank"
				rel="noopener noreferrer">
				Wise
			</a>{' '}
			Gatsby site.
		</p>
		<p>{T.translate('Now go build something great')}.</p>
		<h1>Go To</h1>
		<ul>
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
			<li>
				<Link to="/404">404 Error</Link>
			</li>
		</ul>
	</Layout>
)

export default IndexPage
