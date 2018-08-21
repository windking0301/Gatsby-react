import { css, injectGlobal } from 'styled-components'
import { reset } from './reset'
import { above, below } from './functions'


export const headerHeight = '8rem'



export const footerHeight = '3rem'

export const generalsidePadd = '4rem'
export const generalTopPadd = '4rem'

export const Cf = css`
		&:after {
			display: table;
			content: "";
			clear: both;
		}
	`;

export const colors = {
  white: `#fff`,
  black: `#000`,
  grey: `#666`,
  bodyText: `#646464`,
  footerText: `#9B9B9B`,
  bg: `#f1f1f1`,
}

export const textStyles = {
	h1: css`
		font-size:8rem; 
		line-height: 1;
		font-weight:100;
		${below.tablet`
			font-size:7rem;
		`};
		${below.phone`
			font-size:5rem;
		`};
	`,
	h2: css`
		color:${colors.black};
		font-size:3rem; 
		line-height: 1.4;
		font-weight:normal;
		margin-bottom:2.7rem;
		${below.tablet`
			font-size:2.8rem;
		`};
		${below.phone`
			font-size:2.3rem;
		`};
	`,
	h3: css`
		font-size: 1.7rem;
		line-height: 1;
		letter-spacing: 0.33em;
		text-transform: uppercase;
		color:${colors.black}
		${below.phone`
			font-size:1.3rem;
		`};`,
	h4: css`
		font-size: 1.3rem;
		line-height: 1;
		font-weight: 800;
		letter-spacing: 0.33em;
		text-transform: uppercase;	
		color:${colors.black};
	`,
	p: css`
		font-size: 2rem;
		line-height:1.4; 
		font-weight: 1500;
		margin-bottom:4rem;
		white-space: pre-line;
		color:${colors.black};
		${below.phone`
			font-size:1.8rem;
		`};
`
}


