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
  h2 { ${tw('ml-4')} }
  p { ${tw('ml-8')} }
  li { ${tw('my-4 mx-0')} }
  strong { ${tw('font-medium')} }
  table {
    border-collapse: collapse;
    ${tw('ml-8')}
  }
  table th { ${tw('font-normal')} }
  table td, table th { ${tw(
		'p-2 border-0 border-r border-solid border-blue-darkest text-center align-middle'
	)} }
  table td:last-child, table th:last-child { ${tw('border-r-0')} }
  thead { ${tw('border-0 border-b border-solid border-blue-darkest')} }
  button { ${tw(
		'block m-auto my-4 appearance-none bg-blue-darkest border-solid border border-blue-dark hover:border-blue text-blue-lightest px-4 py-2 rounded shadow leading-tight'
	)} }
  form { ${tw('flex flex-col max-w-sm m-auto text-center')} }
  select { outline: none; }
  form div { ${tw('flex items-center')} }
  form textarea { ${tw('resize-y h-32')} }
  form label { ${tw('ml-2')} }
  form input, form textarea { outline: none;
    ${tw(
			'appearance-none p-2 my-2 bg-transparent border-0 border-b border-solid border-blue-darkest focus:border-blue font-sans font-thin text-base text-blue-darkest'
		)} }
  form input[type='checkbox'] { ${tw(
		'border border-solid border-blue-darkest hover:border-blue'
	)} }
  form input[type='checkbox']:checked { ${tw(
		'bg-blue border border-blue-darkest hover:border-blue'
	)} }
`
