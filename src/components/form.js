import React from 'react'
import PropTypes from 'prop-types'

const Form = ({ action, name, children }) => (
	<form
		name="contact"
		method="post"
		data-netlify="true"
		data-netlify-honeypot="turing-test"
		action={action}>
		<input type="hidden" name="form-name" value={name} />
		<input type="hidden" name="turing-test" />
		{children}
	</form>
)

Form.propTypes = {
	action: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
}

export default Form
