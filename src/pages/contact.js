import React from 'react'
import Helmet from 'react-helmet'
import T from 'i18n-react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Form from '../components/form'

const ContactPage = ({ pageContext: { lang }, location }) => (
	<Layout path={location.pathname}>
		{T.setTexts(lang)}
		<Helmet title={T.translate('contact.title')} />
		<h1>
			{'{'} {T.translate('contact.header')}
		</h1>
		<Form name="contact" action="/thanks">
			<input
				type="text"
				name="name"
				placeholder={T.translate('contact.placeholder.name')}
				autoComplete="name"
				required
			/>
			<input
				type="email"
				name="email"
				placeholder={T.translate('contact.placeholder.email')}
				autoComplete="email"
				required
			/>
			<textarea
				name="message"
				placeholder={T.translate('contact.placeholder.message')}
				required
			/>
			<div>
				<input
					type="checkbox"
					id="consent"
					name="consent"
					value={
						'I consent to my data being stored in line with the Privacy Policy.' +
						Date.now
					}
					required
				/>
				<T.text
					tag="label"
					htmlFor="consent"
					text={{
						key: 'contact.consent.message',
						var: (
							<a href="/legal#privacy-policy" target="_blank">
								{T.translate('contact.consent.link')}
							</a>
						)
					}}
				/>
			</div>
			<button type="submit">{T.translate('contact.submit')}</button>
			<T.span
				text={{
					key: 'contact.obliviate.message',
					var: (
						<Link to="/obliviate">{T.translate('contact.obliviate.link')}</Link>
					)
				}}
			/>
		</Form>
	</Layout>
)

export default ContactPage
