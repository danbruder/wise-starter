import React from 'react'
import PropTypes from 'prop-types'
import Link from '../components/link'
import T from 'i18n-react'
const languages = require('../locales/languages')

function removeLangKey(location) {
	for (var i = 0; i != languages.keys.length; i++) {
		var substring = '/' + languages.keys[i]
		if (location.includes(substring) == true) {
			return location.replace(substring, '')
			break
		} else {
			return location
		}
	}
}

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
			<h2>
				<Link
					to={removeLangKey(location)}
					activeClassName="active"
					className="a">
					EN
				</Link>
				''
				<Link
					langKey="fr"
					to={removeLangKey(location)}
					activeClassName="active"
					className="a">
					FR
				</Link>
			</h2>
		</div>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string.isRequired,
	className: PropTypes.string
}

export default Header
