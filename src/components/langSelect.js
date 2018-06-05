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

function LangKeys(langs, location) {
	return langs.map((lang, index) => (
		<li key={index}>
			<Link
				langKey={lang}
				to={removeLangKey(location)}
				activeClassName="active"
				className="a">
				{lang}
			</Link>
		</li>
	))
}

const LangSelect = ({ location }) => (
	<ul>
		<li>
			<Link to={removeLangKey(location)} activeClassName="active" className="a">
				{languages.defaultKey}
			</Link>
		</li>
		{LangKeys(languages.keys, location)}
	</ul>
)

LangSelect.propTypes = {
	location: PropTypes.string.isRequired
}

export default LangSelect
