import React from 'react'
import Helmet from 'react-helmet'
import T from 'i18n-react'

import Layout from '../components/layout'
import Form from '../components/form'

const ObliviatePage = ({ pageContext: { lang }, location }) => (
	<Layout path={location.pathname}>
		{T.setTexts(lang)}
		<div>
			<Helmet title="Obliviate" />
			<h1
				style={{
					textAlign: 'center'
				}}>
				Obliviate
			</h1>
			<Form name="obliviate" action="/thanks">
				<input
					type="email"
					name="email"
					placeholder="@ Mail"
					autoComplete="email"
					required
				/>
				<button type="submit">Forget Me</button>
				<span>
					You can exercise your right of oblivion in line with our{' '}
					<a href="/legal#privacy-policy" target="_blank">
						Privacy Policy
					</a>, completing this form would trigger the deletion of all your
					personal information from our database.
				</span>
			</Form>
		</div>
	</Layout>
)

export default ObliviatePage
