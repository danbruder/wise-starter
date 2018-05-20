import React from 'react'
import PropTypes from 'prop-types'

const Form = props => (
	<form
		name="contact"
		method="post"
		data-netlify="true"
		data-netlify-honeypot="turing-test"
		action={props.action}>
		<input type="hidden" name="form-name" value={props.name} />
		<input type="hidden" name="turing-test" />
		{props.children}
		<button type="submit">Send</button>
	</form>
)

Form.propTypes = {
	action: PropTypes.string,
	name: PropTypes.string,
	children: PropTypes.func
}

export default Form
