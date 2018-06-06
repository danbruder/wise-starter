import React from 'react'
import PropTypes from 'prop-types'
import Link from '../components/link'
import T from 'i18n-react'

function removeLangKey(keys, location) {
	for (var i = 0; i != keys.length; i++) {
		var substring = '/' + keys[i]
		if (location.includes(substring) == true) {
			return location.replace(substring, '')
			break
		} else {
			return location
		}
	}
}

function LangKeys(keys, location) {
	return keys.map((lang, index) => (
		<li key={index}>
			<Link
				langKey={lang}
				to={removeLangKey(keys, location)}
				activeClassName="active"
				className="a">
				{lang}
			</Link>
		</li>
	))
}

const LangSelect = ({ languages, location }) => (
	<ul>
		<li>
			<Link
				to={removeLangKey(languages.keys, location)}
				activeClassName="active"
				className="a">
				{languages.defaultKey}
			</Link>
		</li>
		{LangKeys(languages.keys, location)}
	</ul>
)

LangSelect.propTypes = {
	languages: PropTypes.object.isRequired,
	location: PropTypes.string.isRequired
}

export default LangSelect
