/* global tw */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

import Link from '../components/link'

const Container = styled('header')`
	${tw('p-4 container bg-blue-dark')};
`
const HomeLink = styled(Link)`
	${tw('font-light text-blue-lightest')};
`

const Header = ({ siteTitle, children }) => (
	<Container>
		<h1>
			<HomeLink to="/" activeClassName="active">
				{siteTitle}
			</HomeLink>
		</h1>
		{children}
	</Container>
)

Header.propTypes = {
	siteTitle: PropTypes.string.isRequired
}

export default Header
