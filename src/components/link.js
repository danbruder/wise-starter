import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import T from 'i18n-react'

const iLink = ({ langKey, to, activeClassName, className, children }) => (
	<Link
		exact
		to={langKey ? '/' + langKey + to : T.translate('prefix') + to}
		className={className}
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
