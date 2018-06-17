import React from 'react'
import T from 'i18n-react'
import { push } from 'gatsby'

export default class Contact extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: T.translate('prefix'),
			path: this.props.path.replace(T.translate('prefix'), '')
		}
	}

	handleChange = e => {
		this.setState({ value: e.target.value })
		push(e.target.value + this.state.path)
	}

	render() {
		return (
			<select
				onChange={this.handleChange}
				value={this.state.value}
				aria-label="Language">
				{Object.entries(this.props.keys).map(([key, value]) => (
					<option key={key} value={value.prefix}>
						{value.name}
					</option>
				))}
			</select>
		)
	}
}
