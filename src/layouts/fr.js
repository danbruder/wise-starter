import React from 'react'

var dictionary = require('../locales/FR.yml')

import Layout from './index'

export default props => <Layout {...props} lang={dictionary} />

export const query = graphql`
	query FRLayoutQuery {
		site {
			siteMetadata {
				title
				author
				description
				lang
			}
		}
	}
`
