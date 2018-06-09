import React from 'react'

import Layout from '../components/layout'
import Link from '../components/link'

import T from 'i18n-react'

const IndexPage = ({ pageContext: { lang }, location }) => (
	<Layout location={location.pathname}>
		{T.setTexts(lang)}
		<h1>Hi people !</h1>
		<p>{T.translate('hello')}</p>
		<p>Welcome to your new Wise Gatsby site.</p>
		<p>Now go build something great.</p>
		<h1>Go To</h1>
		<ul>
			<li>
				<Link langKey={T.translate('prefix')} to="/page-2">
					Page 2
				</Link>
			</li>
			<li>
				<Link langKey={T.translate('prefix')} to="/404">
					404 Error
				</Link>
			</li>
			<li>
				<Link langKey={T.translate('prefix')} to="/contact">
					Contact
				</Link>
			</li>
			<li>
				<Link langKey={T.translate('prefix')} to="/obliviate">
					Obliviate
				</Link>
			</li>
			<li>
				<Link langKey={T.translate('prefix')} to="/thanks">
					Thanks
				</Link>
			</li>
			<li>
				<Link langKey={T.translate('prefix')} to="/legal">
					Legal
				</Link>
			</li>
		</ul>
	</Layout>
)

export default IndexPage
