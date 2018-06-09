import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const iLink = ({ langKey, to, activeClassName, children }) => (
	<Link
		exact
		to={langKey ? '/' + langKey + to : to}
		activeClassName={activeClassName}>
		{children}
	</Link>
)

Link.propTypes = {
	langKey: PropTypes.string,
	to: PropTypes.string.isRequired,
	activeClassName: PropTypes.string
}

export default iLink
