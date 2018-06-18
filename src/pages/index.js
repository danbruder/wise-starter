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
		<T.p
			text={{
				key: 'home.welcome',
				var: (
					<a
						href="https://github.com/TomPichaud/wise-starter"
						target="_blank"
						rel="noopener noreferrer">
						Wise
					</a>
				)
			}}
		/>
		<p>{T.translate('home.message')}</p>
		<h1>{'{'}</h1>
		<ul>
			<li>
				<Link to="/contact">{T.translate('contact.title')}</Link>
			</li>
			<li>
				<Link to="/obliviate">{T.translate('obliviate.title')}</Link>
			</li>
			<li>
				<Link to="/thanks">{T.translate('thanks.title')}</Link>
			</li>
			<li>
				<Link to="/legal">{T.translate('legal.title')}</Link>
			</li>
			<li>
				<Link to="/404">{T.translate('e404.title')}</Link>
			</li>
		</ul>
	</Layout>
)

export default IndexPage
