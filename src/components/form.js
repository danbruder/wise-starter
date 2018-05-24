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
	action: PropTypes.string,
	name: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.array
}

export default Form
