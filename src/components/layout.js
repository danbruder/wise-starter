import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery } from 'gatsby'

import T from 'i18n-react'

import Header from './header'

import LangSelect from './langSelect'

import languages from '../locales/languages'

import AppleTouchIcon from '../../static/apple-touch-icon.png'
import Favicon16 from '../../static/favicon-16x16.png'
import Favicon32 from '../../static/favicon-32x32.png'
import SafariPinnedTab from '../../static/safari-pinned-tab.svg'

export default ({ children, location }) => (
	<StaticQuery
		query={graphql`
			query LayoutQuery {
				site {
					siteMetadata {
						title
						author
						description
					}
				}
			}
		`}
		render={data => (
			<>
				<Helmet
					titleTemplate={`%s | ${data.site.siteMetadata.title}`}
					defaultTitle={data.site.siteMetadata.title}
					meta={[
						{
							name: 'author',
							content: `${data.site.siteMetadata.author}`
						},
						{
							name: 'description',
							content: `${data.site.siteMetadata.description}`
						}
					]}
					htmlAttributes={{ lang: `${T.translate('key')}` }}
					link={[
						{
							rel: 'apple-touch-icon',
							sizes: '180x180',
							href: `${AppleTouchIcon}`
						},
						{
							rel: 'icon',
							sizes: '32x32',
							type: 'image/png',
							href: `${Favicon32}`
						},
						{
							rel: 'icon',
							sizes: '16x16',
							type: 'image/png',
							href: `${Favicon16}`
						},
						{ rel: 'mask-icon', color: '#663399', href: `${SafariPinnedTab}` }
					]}
				/>
				<Header siteTitle={data.site.siteMetadata.title} />
				<div>{children}</div>
			</>
		)}
	/>
)

/* <LangSelect location={location} languages={languages} /> */
