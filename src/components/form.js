import React from 'react'

const Form = props => (
	<form
		name="contact"
		method="post"
		data-netlify="true"
		data-netlify-honeypot="bot-field"
		action="/thanks/">
		{props.children}
		<button type="submit">Send</button>
	</form>
)

export default Form
