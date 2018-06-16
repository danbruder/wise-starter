// TODO: Add ogp image arrays, og:locale:alternate og:video og:audio article music video book profile
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery } from 'gatsby'
import T from 'i18n-react'

const Head = ({ seo, path }) => (
	<StaticQuery
		query={graphql`
			query HeadQuery {
				site {
					siteMetadata {
						title
						author
						description
						siteUrl
						facebookAppID
						twitterSiteID
						twitterUserID
					}
				}
			}
		`}
		render={data => {
			const o = data.site.siteMetadata
			return (
				<Helmet titleTemplate={`%s | ${o.title}`} defaultTitle={o.title}>
					<html lang={T.translate('key')} />
					<link
						rel="apple-touch-icon"
						href="/apple-touch-icon.png"
						sizes="180x180"
					/>
					<link
						rel="icon"
						href="/favicon-32x32.png"
						sizes="32x32"
						type="image/png"
					/>
					<link
						rel="icon"
						href="/favicon-16x16.png"
						sizes="16x16"
						type="image/png"
					/>
					<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#663399" />
					<meta
						name="author"
						content={seo && seo.author ? seo.author : o.author}
					/>
					<meta
						name="description"
						content={seo && seo.description ? seo.description : o.description}
					/>
					<meta name="msapplication-config" content="/browserconfig.xml" />
					<meta name="twitter:card" content="summary" />
					{o.facebookAppID ? (
						<meta property="fb:app_id" content={o.facebookAppID} />
					) : null}
					{o.twitterSiteID ? (
						<meta name="twitter:site" content={o.twitterSiteID} />
					) : null}
					{o.twitterUserID ? (
						<meta name="twitter:creator" content={o.twitterUserID} />
					) : null}
					<meta property="og:site_name" content={o.title} />
					<meta property="og:locale" content={T.translate('key')} />
					<meta
						property="og:title"
						content={seo && seo.title ? seo.title : o.title}
					/>
					<meta
						property="og:type"
						content={seo && seo.type ? seo.type : 'website'}
					/>
					<meta
						property="og:description"
						content={seo && seo.description ? seo.description : o.description}
					/>
					<meta property="og:url" content={o.siteUrl + path} />
					<meta property="og:image" content={o.siteUrl + '/ogp.png'} />
				</Helmet>
			)
		}}
	/>
)

Head.propTypes = {
	seo: PropTypes.object,
	path: PropTypes.string.isRequired
}

export default Head
