import React from 'react'
import Helmet from 'react-helmet'
import T from 'i18n-react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Form from '../components/form'

const ContactPage = ({ pageContext: { lang }, location }) => (
	<Layout location={location.pathname}>
		{T.setTexts(lang)}
		<div>
			<Helmet title="Contact" />
			<h1
				style={{
					textAlign: 'center'
				}}>
				Contact
			</h1>
			<Form name="contact" action="/thanks">
				<input
					type="text"
					name="name"
					placeholder="Name"
					autoComplete="name"
					required
				/>
				<input
					type="email"
					name="email"
					placeholder="@ Mail"
					autoComplete="email"
					required
				/>
				<textarea name="message" placeholder="Message" required />
				<div>
					<input
						type="checkbox"
						id="consent"
						name="consent"
						value="I consent to my data being stored in line with the Privacy Policy[]."
						required
						style={{
							marginRight: '0.5rem'
						}}
					/>
					<label htmlFor="consent">
						I consent to my data being stored in line with the{' '}
						<a href="/legal#privacy-policy" target="_blank">
							Privacy Policy
						</a>, as a means to communicate with Wise Starter.
					</label>
				</div>
				<button type="submit">Send</button>
				<span>
					You can exercise your right of <Link to="/obliviate">Oblivion</Link>{' '}
					at any time.
				</span>
			</Form>
		</div>
	</Layout>
)

export default ContactPage

// TODO: Target _blank for privacy policy
