import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { textStyles } from '../styles/vars'

export const H1 = ({ className = "",  children }) => (
  <H1container  className={className} >
    {children}
  </H1container>
)
export const H2 = ({ className = "", children }) => (
  <H2container className={className}  >
    {children}
  </H2container>
)
export const H3 = ({ className = "", children }) => (
  <H3container className={className} >
    {children}
  </H3container>
)
export const H4 = ({ className = "", children }) => (
  <H4container className={className} >
    {children}
  </H4container>
)
export const P = ({ className = "",  children }) => (
  <Pcontainer className={className}  >
    {children}
  </Pcontainer>
)


export function Text({ grey = "",  h1 = "",  h2 = "",  h3 = "",  h4 = "",  p = ""}) {
		if(grey) {
		grey = 'grey txtWrap'
	} else {
		grey = 'txtWrap'
	}
	if (h1) {   
		h1 = (
			<H1container className="wrapper sml padd"  >{h1}</H1container>
		);
	}
	if (h2) {   
		h2 = (
			<H2container className="wrapper sml padd"  >{h2}</H2container>
		);
	}		
	if (h3) {   
		h3 = (
			<H3container className="wrapper sml padd"  >{h3}</H3container>
		);
	}		
	if (h4) {   
		h4 = (
			<H4container className="wrapper sml padd"  >{h4}</H4container>
		);
	}		
	if (p) {   
		p = (
			<Pcontainer className="wrapper sml padd" >{p}</Pcontainer>
		);
	}	
	return(
		<div className={grey}  >
			{h1}
			{h2}
			{h3}
			{h4}
			{p}
		</div>
	)
}


const H1container = styled.h1`
	${textStyles.h1}
	&.padd{
		padding-top:4.5rem;
		padding-bottom:4.5rem;
	}
`

const H2container = styled.h2`
${textStyles.h2}
`

const H3container = styled.h3`
${textStyles.h3}
`

const H4container = styled.h4`
${textStyles.h4}
`

const Pcontainer = styled.p`
${textStyles.p}
`