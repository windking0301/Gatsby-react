import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"
import { below } from "../styles/functions"
import { H2, p } from "../components/Text"
import { colors, textStyles } from "../styles/vars"

export const FindLink = ({ children, to, color = null }) => (		
  <FindLinkContainer className="FindLink" to={to} color={color}>
    {children}
  </FindLinkContainer>
)
export const GoLink = ({ to, title, color = null }) => (		
  <ReadLinkContainer className="g1" to={to} color={color}>
    <H2>{title}</H2>
  </ReadLinkContainer>
)
export const ReadLink = ({ to, color = null }) => (		
  <ReadLinkContainer className="g1" to={to} color={color}>
    	Find Out More
		<div className="icon" >
			<svg viewBox="0 0 107 9" version="1.1" xmlns="http://www.w3.org/2000/svg" >
			<title>Group</title>
			<desc>Created with Sketch.</desc>
			<defs></defs>
			<g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<g id="Elements/Arrow/grey" transform="translate(0.000000, -4.000000)" stroke="#646464">
						<g id="Group" transform="translate(0.000000, 4.000000)">
								<path d="M0.500483582,4.5 L106.463224,4.5" id="Stroke-1"></path>
								<polyline id="Stroke-4" points="102 0 106.235294 4.49957814 102 9"></polyline>
						</g>
				</g>
			</g>
			</svg>
		</div>
  </ReadLinkContainer>
)

export const Submit = ({ value = "Submit" }) => (
  <SubmitContainer type="submit" value={value} />
)

export default FindLink

const FindLinkContainer = styled(Link)`
  border: 1px solid currentColor;
  color: ${props => (props.color == "white" ? colors.white : colors.grey)};
	font-family: 'Neutra Text TF';
	font-weight:700;
  height: 3.16em;
  ${below.phone`
  	height: 3.5em;
	`};
  text-align: center;
  padding: 0 6.916666666666667em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 17em;
  transition: all 0.2s linear;
  white-space: nowrap;
  border-radius: 0;
	background: none;
  ${textStyles.h4}
  color: ${props => (props.color == "white" ? colors.white : colors.grey)};
	&:hover {
    background-color: ${props =>
      props.color == "white" ? colors.white : colors.grey};
    color: ${props =>
      props.color == "white" ? colors.bodyText : colors.white};
  }
`

const ReadLinkContainer = styled(Link)`
	${textStyles.h4}; 
	text-decoration: none;
	color: ${colors.footerText};
	transition: all 250ms cubic-bezier(0.455, 0.030, 0.515, 0.955);
	.icon{
		content: '';
		display:inline-block;
		height: 0.9rem;
		width: 10.8rem;
		margin-left:1.5rem;
		transition: all 250ms cubic-bezier(0.455, 0.030, 0.515, 0.955);
	}
	&:hover,
	&:active {
		color:#000;

		.icon {
			transform:translateX(4px);
		}
	}
`

const SubmitContainer = FindLinkContainer.withComponent("input")