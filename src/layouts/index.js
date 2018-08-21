import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled, { injectGlobal } from "styled-components"
import ReactPixel from 'react-facebook-pixel';

import Header from "../components/Header"
import Footer from "../components/Footer"
import LoginOverlay from "../components/LoginOverlay"
import * as vars from "../styles/vars"
import "../styles/main"

injectGlobal`
  * {
    box-sizing: border-box;
  }
`


class TemplateWrapper extends React.Component {
  constructor() {
    super()
    this.state = {
      nav_open: false,
      login_overlay: false
    }
  }
  toggleNav() {
    let nav_open = !this.state.nav_open
    this.setState({ nav_open })
  }
  toggleLoginOverlay() {
    console.log("toggle overlay")
    let login_overlay = !this.state.login_overlay
    this.setState({ login_overlay })
  }
  render() {
		if (typeof window !== `undefined`) {
		ReactPixel.init('2070435239869067');
		ReactPixel.pageView(); 
		}
		const { title, legalLinks } = this.props.data.site.siteMetadata
		let margin;
		if(this.props.location.pathname == '/') {
			margin = 0;
		} else {
			margin = '8rem';
		}
		const Main = styled.main`
			min-height: calc(100vh - ${vars.footerHeight});
			margin-top: ${margin};
      overflow-x:hidden;
		`
		return (
      <div>
        <Helmet
          title={title}
          meta={[{ name: "description", content: "We understand what people are looking for and the lifestyle they aspire to. It is what drives us to bring you exceptional residences in the best locations, designed for luxurious living." }]}
        />
        <Header
          toggleNav={this.toggleNav.bind(this)}
          nav_open={this.state.nav_open}
          siteTitle={title}
          page={this.props.location.pathname}
          toggleLoginOverlay={this.toggleLoginOverlay.bind(this)}
        />
        <Main>
          {this.props.children({
            ...this.props,
            toggleNav: this.toggleNav.bind(this)
          })}
        </Main>
        <Footer legalLinks={legalLinks} />
        {this.state.login_overlay && (
          <LoginOverlay
            toggleLoginOverlay={this.toggleLoginOverlay.bind(this)}
          />
        )}
      </div>
    )
  }z
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
        legalLinks {
          href
          name
        }
      }
    }
  }
`
