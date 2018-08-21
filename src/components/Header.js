import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import { findDOMNode } from "react-dom"

import { headerHeight, colors, textStyles } from "../styles/vars"
import Hamburger from "../components/Hamburger"
import Nav from "../components/Nav"
import LandisLogo from "../icons/LandisLogo"
import { below } from "../styles/functions"

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      scrollStage: 0
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this))
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this))
  }
  handleScroll(e) {
    const containerElement = findDOMNode(this)

    if (window.pageYOffset > window.innerHeight / 2) {
      this.setState({ scrollStage: 2 })
    } else if (window.pageYOffset > containerElement.offsetHeight) {
      this.setState({ scrollStage: 1 })
    } else {
      this.setState({ scrollStage: 0 })
    }
  }

  render() {
    let fontColor =
      this.props.page === "/" && this.state.scrollStage < 2
        ? colors.white
        : colors.black

    return (
      <Container scrollStage={this.state.scrollStage} fontColor={fontColor}>
        <Logo fontColor={fontColor}>
          <Link to="/">
            <LandisLogo width="110" fill={fontColor} />
          </Link>
        </Logo>
        <Nav {...this.props} />
        <LoginButton to="/login" target="_blank">Login</LoginButton>
        <Hamburger {...this.props} />
      </Container>
    )
  }
}

export default Header

const Container = styled.header`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: ${headerHeight};
  background-color: ${colors.white};
  color: ${colors.black};
  padding: 0 2.7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1001;
  ${props =>
    props.fontColor === colors.white &&
    `
		.line{
			background-color:#ffffff;
		}
    background-color: transparent;
    color: ${colors.white};
  `};
`

const LoginButton = styled(Link)`
  ${textStyles.h4}
  color: inherit;
  /* cursor: pointer;
	-webkit-transition: opacity .5s ease;
  -moz-transition: opacity .5s ease;
  -ms-transition: opacity .5s ease;
  -o-transition: opacity .5s ease;
  transition: opacity .5s ease;
	&:hover{
		opacity:0.6;
	}
	${below.desktop`
		margin-left:auto;
		padding-right:4rem;
	`}; */
`

const Logo = styled.div`
  opacity: 1;
	width: 10.7rem;
	height: 3.2rem;
	svg{
		width: 10.7rem;
		height: 3.2rem;	
		fill: #1D1D1B;
	}
	svg * {
		fill: #1D1D1B;
	}
  ${props =>
    props.fontColor === colors.white &&
    `
    opacity: 0;
  `};
`
