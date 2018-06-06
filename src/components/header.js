import React from 'react'
import PropTypes from 'prop-types'
import Link from '../components/link'
import T from 'i18n-react'

const Header = ({ siteTitle, className, children }) => (
	<header className={className}>
		<div className="div">
			<h1 className="h1">
				<Link
					langKey={T.translate('key')}
					to="/"
					activeClassName="active"
					className="a">
					{siteTitle}
				</Link>
			</h1>
			{children}
		</div>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string.isRequired,
	className: PropTypes.string
}

export default Header
