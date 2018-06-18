module.exports = {
	key: 'en',
	prefix: '',
	name: 'English',
	home: {
		title: 'Home',
		header: 'Welcome',
		welcome: 'Welcome to your new',
		message: 'Now go build something great.'
	},
	contact: {
		title: 'Contact',
		header: 'Contact',
		placeholder: {
			name: 'Name',
			email: '@ Mail',
			message: 'Message'
		},
		consent: {
			message:
				'I consent to my data being stored in line with the {var}, as a means to communicate with Wise Starter.',
			link: 'Privacy Policy'
		},
		submit: 'Send',
		obliviate: {
			message: 'You can exercise your {var} at any time.',
			link: 'Right of Oblivion'
		}
	},
	obliviate: {
		title: 'Obliviate',
		header: 'Right of Oblivion',
		placeholder: {
			email: '@ Mail'
		},
		submit: 'Forget Me',
		message:
			'You can exercise your right of oblivion in line with our {var}, completing this form would trigger the deletion of all your personal information from our database.',
		link: 'Privacy Policy'
	},
	thanks: {
		title: 'Thanks',
		header: 'Thank you',
		message: 'Your form has been submitted.',
		link: 'Go back to Home page'
	},
	e404: {
		title: '404',
		header: 'Not Found',
		message: "You just hit a route that doesn't exist... the sadness!",
		link: 'Go back to Home page'
	}
}
