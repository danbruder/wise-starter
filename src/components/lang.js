/* global tw */
import React from 'react'
import styled from 'react-emotion'
import T from 'i18n-react'
import { push } from 'gatsby'

const Wrapper = styled('div')`
	${tw('inline-block relative w-32')};
`

const Select = styled('select')`
	${tw(
		'block appearance-none w-full bg-blue-darkest border border-blue-dark hover:border-blue text-blue-lightest px-4 py-2 pr-8 rounded shadow leading-tight'
	)};
`

const Chevron = styled('div')`
	${tw(
		'pointer-events-none absolute pin-y pin-r flex items-center px-2 text-blue-lightest'
	)};
`

const Svg = styled('svg')`
	${tw('fill-current h-4 w-4')};
`

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
			<Wrapper>
				<Select
					onChange={this.handleChange}
					value={this.state.value}
					aria-label="Language">
					{Object.entries(this.props.keys).map(([key, value]) => (
						<option key={key} value={value.prefix}>
							{value.name}
						</option>
					))}
				</Select>
				<Chevron>
					<Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
					</Svg>
				</Chevron>
			</Wrapper>
		)
	}
}
