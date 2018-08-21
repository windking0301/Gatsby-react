import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

import { colors, textStyles } from "../styles/vars"
import { below } from "../styles/functions"

const items = [
  {
    to: "/collections",
    text: "Our Projects"
  },
  {
    to: "/our-approach",
    text: "Our Approach"
  },
  {
    to: "/about",
    text: "About"
  },
  {
    to: "/news",
    text: "News"
  },
  {
    to: "/contact",
    text: "Contact"
  }
]

const Nav = ({ nav_open }) => (
  <Container nav_open={nav_open}>
    <List>
      {items.map((i, index) => (
        <Item key={index}>
          <NavLink activeClassName="is-active" to={i.to}
						onClick={e => {
							props.toggleNav()
						}}
					>
            {i.text}
          </NavLink>
        </Item>
      ))}
    </List>
  </Container>
)

export default Nav

const Container = styled.nav`
  width: auto;
  transition: all 0.2s;
  color: inherit;
  ${below.desktop`
  	position: fixed;
    top: 0;
    left: 0;  
    height: 100vh;
    width: 100%;
    z-index: 1001;
		background: #fff;
    opacity: ${props => (props.nav_open ? `1` : `0`)};
    visibility: ${props => (props.nav_open ? `visible` : `hidden`)};
	`};
`

const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  ${below.desktop`
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `};
`
const Item = styled.li`
  list-style-type: none;
  margin: 0;
  margin: 0 2rem 0 2rem;
	&:last-of-type{
		margin-right:0;
	}
	&:first-of-type{
		margin-left:0;
	}
	${below.desktop`
		margin:0 0 1.5rem 0;
		
  `};
`

const NavLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  ${textStyles.h4}
  font-weight:700;
  color: inherit;
	-webkit-transition: color .25s ease;
  -moz-transition: color .25s ease;
  -ms-transition: color .25s ease;
  -o-transition: color .25s ease;
  transition: color .25s ease;
	&:hover{
    color: ${colors.footerText};
	}
	${below.desktop`
		${textStyles.h2}
		text-transform:none;
		letter-spacing:normal;
  `};
  &.is-active {
    color: ${colors.footerText};
  }
`
