import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'
import Link from 'gatsby-link'
import Form from '../components/form'

import styles from '../styles/form'

const ContactPage = ({ classes, transition }: Props) => (
	<div style={transition && transition.style}>
		<Helmet title="Contact" />
		<h1
			style={{
				textAlign: 'center'
			}}>
			Contact
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
			<div className={classes.consent}>
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
			<button className={classes.button} type="submit">
				Send
			</button>
			<span className={classes.forget}>
				You can exercise your right of <Link to="/obliviate">Oblivion</Link> at
				any time.
			</span>
		</Form>
	</div>
)

export default injectSheet(styles)(ContactPage)

// TODO: Target _blank for privacy policy
