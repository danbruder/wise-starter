import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Header = ({ siteTitle, className }) => (
	<header className={className}>
		<div className="div">
			<h1 className="h1">
				<Link exact to="/" activeClassName="active" className="a">
					{siteTitle}
				</Link>
			</h1>
		</div>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
	className: PropTypes.string
}

export default Header
