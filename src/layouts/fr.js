import React from 'react'

import Layout from './index'

var dictionary = require('../locales/FR.yml')

export default props => <Layout {...props} lang={dictionary} />

export const query = graphql`
	query FRLayoutQuery {
		site {
			siteMetadata {
				title
				author
				description
			}
		}
	}
`
