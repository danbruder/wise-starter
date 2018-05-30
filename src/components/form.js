import React from 'react'
import PropTypes from 'prop-types'

const Form = ({ action, className, name, children }) => (
	<form
		name="contact"
		method="post"
		data-netlify="true"
		data-netlify-honeypot="turing-test"
		action={action}
		className={className}>
		<input type="hidden" name="form-name" value={name} />
		<input type="hidden" name="turing-test" />
		{children}
	</form>
)

Form.propTypes = {
	action: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	className: PropTypes.string,
	children: PropTypes.array.isRequired
}

export default Form
