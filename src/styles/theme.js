/* global tw */
import { injectGlobal } from 'emotion'

injectGlobal`
  body { ${tw(
		'm-0 font-sans font-thin text-blue-darkest bg-blue-lightest leading-normal'
	)} }
	a { ${tw(
		'pb-1 no-underline font-normal text-blue-darkest hover:text-blue-darkest border-0 border-b border-solid border-blue-dark hover:border-blue'
	)} }
  .anchor { ${tw('hidden')} }
	h1, h2 { ${tw('my-4 mx-0 font-thin')} }
  h2 { ${tw('mx-4')} }
  p { ${tw('mx-8')} }
  li { ${tw('my-4 mx-0')} }
  strong { ${tw('font-medium')} }
  table {
    border-collapse: collapse;
    ${tw('mx-8')}
  }
  table th { ${tw('font-normal')} }
  table td, table th { ${tw(
		'p-2 border-0 border-r border-solid border-blue-darkest text-center align-middle'
	)} }
  table td:last-child, table th:last-child { ${tw('border-r-0')} }
  thead { ${tw('border-0 border-b border-solid border-blue-darkest')} }
`
