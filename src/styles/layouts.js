import Theme from '../styles/theme.js'

const styles = {
	header: {
		background: Theme.colorPrimary,
		marginBottom: '1.45rem',
		'& .div': {
			margin: '0 auto',
			maxWidth: 960,
			padding: '1.45rem 1.0875rem'
		},
		'& .h1': {
			margin: 0,
			'& .a': {
				color: Theme.colorLight,
				textDecoration: 'none'
			}
		}
	},
	wrapper: {
		margin: '0 auto',
		maxWidth: 960,
		padding: '1.45rem 1.0875rem'
	}
}

export default styles
