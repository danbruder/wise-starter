import React from 'react'
import PropTypes from 'prop-types'
import Link from '../components/link'
import LangSelect from '../components/langSelect'
import T from 'i18n-react'

const Header = ({ siteTitle, location, className }) => (
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
			<LangSelect location={location} />
		</div>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string.isRequired,
	className: PropTypes.string
}

export default Header
