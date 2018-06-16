/* global tw */
import React from 'react'
import styled from 'react-emotion'
import { injectGlobal } from 'emotion'

import Head from './head'
import Header from './header'

injectGlobal`
  body { ${tw('m-0 font-sans font-light text-blue-darkest')} }
	a { ${tw('no-underline text-blue-dark')} }
	h1, h2 { ${tw('my-4 mx-0 font-light')} }
`
const Container = styled('div')`
	${tw('flex flex-col bg-blue-lightest min-h-screen')};
`
const Wrapper = styled('div')`
	${tw('p-4 container')};
`

export default ({ children, location, seo }) => (
	<Container>
		<Head seo={seo} path={location} />
		<Header siteTitle="Wise Starter" />
		<Wrapper>{children}</Wrapper>
	</Container>
)
