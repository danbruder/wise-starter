import React from 'react'
import Helmet from 'react-helmet'
import T from 'i18n-react'

import Link from '../components/link'
import Layout from '../components/layout'
import Form from '../components/form'

const ObliviatePage = ({ pageContext: { lang }, location }) => (
	<Layout path={location.pathname}>
		{T.setTexts(lang)}
		<Helmet title={T.translate('obliviate.title')} />
		<h1>
			{'{'} {T.translate('obliviate.header')}
		</h1>
		<Form name="obliviate" action="/thanks">
			<input
				type="email"
				name="email"
				placeholder={T.translate('obliviate.placeholder.email')}
				autoComplete="email"
				required
			/>
			<button type="submit">{T.translate('obliviate.submit')}</button>
			<T.span
				text={{
					key: 'obliviate.message',
					var: (
						<Link to="/legal#privacy-policy" target="_blank">
							{T.translate('obliviate.link')}
						</Link>
					)
				}}
			/>
		</Form>
	</Layout>
)

export default ObliviatePage
