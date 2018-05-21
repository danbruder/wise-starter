import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
	<div
		style={{
			background: '#0E283F',
			marginBottom: '1.45rem'
		}}>
		<div
			style={{
				margin: '0 auto',
				maxWidth: 960,
				padding: '1.45rem 1.0875rem'
			}}>
			<h1 style={{ margin: 0 }}>
				<Link
					exact
					to="/"
					style={{
						color: 'white',
						textDecoration: 'none'
					}}
					activeClassName="active">
					{siteTitle}
				</Link>
			</h1>
		</div>
	</div>
)

export default Header
