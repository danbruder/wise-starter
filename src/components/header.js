import React from 'react'
import PropTypes from 'prop-types'
import Link from '../components/link'
import T from 'i18n-react'

const Header = ({ siteTitle, children }) => (
	<header>
		<h1>
			<Link langKey={T.translate('prefix')} to="/" activeClassName="active">
				{siteTitle}
			</Link>
		</h1>
		{children}
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string.isRequired
}

export default Header
