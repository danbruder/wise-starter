import Theme from '../styles/theme.js'

const styles = {
	form: {
		width: '100%',
		margin: 'auto',
		maxWidth: '30rem',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	button: {
		margin: '1.45rem 1.0875rem',
		padding: '0.54375rem 1.45rem',
		backgroundColor: Theme.colorSecondary,
		borderRadius: '3px',
		border: 'none',
		color: Theme.colorLight,
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: Theme.colorTertiary
		}
	},
	input: {
		width: '100%',
		border: 'none',
		borderBottom: ['1px solid' + Theme.colorSecondary],
		padding: '1.45rem 1.0875rem',
		borderRadius: '0',
		outline: 'none'
	},
	textarea: {
		composes: '$input',
		height: '10rem',
		resize: 'vertical'
	},
	consent: {
		padding: '1.45rem 1.0875rem',
		paddingBottom: 0
	},
	forget: {
		padding: '1.45rem 1.0875rem',
		paddingTop: 0
	}
}

export default styles
