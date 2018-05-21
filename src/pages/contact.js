import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Form from '../components/form'

const ContactPage = ({ transition }) => (
	<div style={transition && transition.style}>
		<Helmet title="Contact" />
		<h1
			style={{
				textAlign: 'center'
			}}>
			Contact Form
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
		</Form>
	</div>
)

export default ContactPage
