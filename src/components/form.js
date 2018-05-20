import React from 'react'

const Form = props => (
	<form
		name="contact"
		method="post"
		data-netlify="true"
		data-netlify-honeypot="turing-test"
		action="/thanks">
		<input type="hidden" name="turing-test" />
		{props.children}
		<button type="submit">Send</button>
	</form>
)

export default Form
