import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const iLink = ({ langKey, to, activeClassName, className, children }) => (
	<Link
		exact
		to={langKey ? '/' + langKey + to : to}
		activeClassName={activeClassName}
		className={className}>
		{children}
	</Link>
)

Link.propTypes = {
	to: PropTypes.string.isRequired,
	activeClassName: PropTypes.string,
	className: PropTypes.string
}

export default iLink
