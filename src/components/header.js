/* global tw */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

import Link from '../components/link'

const Container = styled('header')`
	${tw('p-4 flex flex-row items-center justify-between bg-blue-darkest')};
`
const HomeLink = styled(Link)`
	${tw(
		'pb-2 font-hairline text-blue-lightest hover:text-blue-lightest border-0 border-b border-solid border-blue-dark hover:border-blue'
	)};
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
