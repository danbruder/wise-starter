/* global tw */
import React from 'react'
import styled from 'react-emotion'
// eslint-disable-next-line
import Theme from '../styles/theme'

import Head from './head'
import Header from './header'
import languages from '../locales/languages'
import Lang from './lang'

const Container = styled('div')`
	${tw('flex flex-col min-h-screen')};
`
const Wrapper = styled('div')`
	${tw('p-4')};
`

export default ({ children, path, seo }) => (
	<Container>
		<Head seo={seo} path={path} />
		<Header siteTitle="Wise Starter">
			<Lang keys={languages.keys} path={path} />
		</Header>
		<Wrapper>{children}</Wrapper>
	</Container>
)
