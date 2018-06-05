import React from 'react'
import Link from '../components/link'

import T from 'i18n-react'

const IndexPage = ({ transition }) => (
	<div style={transition && transition.style}>
		<h1>Hi people !</h1>
		<p>{T.translate('hello')}</p>
		<p>Welcome to your new Wise Gatsby site.</p>
		<p>Now go build something great.</p>
		<h1>Go To</h1>
		<ul>
			<li>
				<Link langKey={T.translate('key')} to="/page-2">
					Page 2
				</Link>
			</li>
			<li>
				<Link langKey={T.translate('key')} to="/404">
					404 Error
				</Link>
			</li>
			<li>
				<Link langKey={T.translate('key')} to="/contact">
					Contact
				</Link>
			</li>
			<li>
				<Link langKey={T.translate('key')} to="/obliviate">
					Obliviate
				</Link>
			</li>
			<li>
				<Link langKey={T.translate('key')} to="/thanks">
					Thanks
				</Link>
			</li>
			<li>
				<Link langKey={T.translate('key')} to="/legal">
					Legal
				</Link>
			</li>
		</ul>
	</div>
)

export default IndexPage
