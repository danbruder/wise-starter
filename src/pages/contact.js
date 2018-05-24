import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'
import Link from 'gatsby-link'
import Form from '../components/form'

import styles from '../styles/contact'

const ContactPage = ({ classes, transition }: Props) => (
	<div style={transition && transition.style}>
		<Helmet title="Contact" />
		<h1
			style={{
				textAlign: 'center'
			}}>
			Contact Form
		</h1>
		<Form name="contact" action="/thanks" className={classes.form}>
			<input
				className={classes.input}
				type="text"
				name="name"
				placeholder="Name"
				autoComplete="name"
				required
			/>
			<input
				className={classes.input}
				type="email"
				name="email"
				placeholder="@ Mail"
				autoComplete="email"
				required
			/>
			<textarea
				className={classes.textarea}
				name="message"
				placeholder="Message"
				required
			/>
			<button className={classes.button} type="submit">
				Send
			</button>
		</Form>
	</div>
)

export default injectSheet(styles)(ContactPage)
