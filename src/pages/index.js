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
		<Helmet title={T.translate('home.title')} />
		{T.setTexts(lang)}
		<h1>{T.translate('home.header')} !</h1>
		<p>
			{T.translate('home.welcome')}{' '}
			<a
				href="https://github.com/TomPichaud/wise-starter"
				target="_blank"
				rel="noopener noreferrer">
				Wise
			</a>{' '}
			Gatsby site.
		</p>
		<p>{T.translate('home.message')}</p>
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
