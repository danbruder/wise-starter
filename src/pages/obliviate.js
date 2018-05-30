import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'
import Link from 'gatsby-link'
import Form from '../components/form'

import styles from '../styles/form'

const ObliviatePage = ({ classes, transition }: Props) => (
	<div style={transition && transition.style}>
		<Helmet title="Obliviate" />
		<h1
			style={{
				textAlign: 'center'
			}}>
			Obliviate
		</h1>
		<Form name="obliviate" action="/thanks" className={classes.form}>
			<input
				className={classes.input}
				type="email"
				name="email"
				placeholder="@ Mail"
				autoComplete="email"
				required
			/>
			<button className={classes.button} type="submit">
				Forget Me
			</button>
			<span className={classes.forget}>
				You can exercise your right of oblivion in line with our{' '}
				<a href="/legal#privacy-policy" target="_blank">
					Privacy Policy
				</a>, completing this form would trigger the deletion of all your
				personal information from our database.
			</span>
		</Form>
	</div>
)

export default injectSheet(styles)(ObliviatePage)
