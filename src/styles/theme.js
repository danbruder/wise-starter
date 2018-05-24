import gray from 'gray-percentage'
import { TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants'
import verticalRhythm from 'compass-vertical-rhythm'

const theme: OptionsType = {
	title: 'WiseTheme',
	baseFontSize: '18px',
	baseLineHeight: 1.56,
	googleFonts: [
		{
			name: 'Source Sans Pro',
			styles: ['200', '400', '400i', '700']
		}
	],
	scaleRatio: 2.5,
	headerFontFamily: ['Source Sans Pro', 'sans-serif'],
	bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
	headerColor: 'hsla(0,0%,0%,0.85)',
	bodyColor: 'hsla(0,0%,0%,0.85)',
	headerWeight: '200',
	bodyWeight: 400,
	boldWeight: 700,
	colorPrimary: '#0E283F',
	colorSecondary: '#862840',
	colorTertiary: '#582644',
	colorLight: 'hsla(0, 0%, 100%, 0.85)',
	overrideStyles: ({ scale, rhythm }, options) => {
		const vr = verticalRhythm({
			baseFontSize: '14px',
			baseLineHeight: 1.21
		})
		const styles = {
			'h1 a,h2 a,h3 a,h4 a,h5 a,h6 a': {
				fontWeight: options.headerWeight
			},
			a: {
				fontWeight: 400,
				color: '#862840',
				textDecoration: 'none'
			},
			'a:hover:not(.active)': {
				color: '#582644',
				textDecoration: 'underline'
			},
			'a.active': {
				pointerEvents: 'none',
				cursor: 'default'
			},
			blockquote: {
				...scale(1 / 5),
				color: gray(40),
				paddingLeft: rhythm(3 / 4),
				marginLeft: 0,
				borderLeft: `${rhythm(1 / 4)} solid ${gray(87)}`
			},
			// Mobile styles
			[TABLET_MEDIA_QUERY]: {
				html: {
					...vr.establishBaseline()
				},
				blockquote: {
					marginLeft: rhythm(-3 / 4),
					marginRight: 0,
					paddingLeft: rhythm(1 / 2)
				},
				table: {
					...scale(-1 / 5)
				}
			}
		}
		return styles
	}
}

export default theme
