import React from 'react'
import PropTypes from 'prop-types'
import styles from './form.module.sass'

const Form = props => (
	<form
		name="contact"
		method="post"
		data-netlify="true"
		data-netlify-honeypot="turing-test"
		action={props.action}
		className={styles.form}>
		<input type="hidden" name="form-name" value={props.name} />
		<input type="hidden" name="turing-test" />
		{props.children}
		<button type="submit">Send</button>
	</form>
)

Form.propTypes = {
	action: PropTypes.string,
	name: PropTypes.string,
	children: PropTypes.array
}

export default Form
