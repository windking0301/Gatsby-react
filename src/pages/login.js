import React from "react"
import styled from "styled-components"

import { colors } from "../styles/vars"
import { H2 } from "../components/Text"
import { Submit } from "../components/Button"
import Input from "../components/Input"
import { navigateTo } from "gatsby-link"


class LoginOverlay extends React.Component {
  constructor() {
    super()
    this.handleUsernamChange = this.handleUsernamChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      email:'admin',
      password:'admin'
    };
  }
  handleSubmit(e) {
    e.preventDefault()
    if(this.state.email == 'admin' && this.state.password == 'admin') {
      window.location = '/agent-portal';
    }
  }

  handleUsernamChange(e){
    this.setState({email:e.target.value})
  }

  handlePasswordChange(e){
      this.setState({password:e.target.value})
  }
  render() {
    return (
      <Container>
        {/* <Close onClick={this.props.toggleLoginOverlay} /> */}
        <Content>
          <div>
            <H2>Agent Login</H2>
          </div>
          <div>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <Input
                label="Username"
                name="username"
                onChange={this.handleUsernamChange}
              />
              <br />
              <Input
                type="password"
                label="Password"
                name="password"
                onChange={this.handlePasswordChange}
              />
              <Submit />
            </form>
          </div>
        </Content>
      </Container>
    )
  }
}
export default LoginOverlay

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 2000;
`
const Close = styled.div`
  height: 3rem;
  width: 3rem;
  position: absolute;
  top: 3rem;
  right: 3rem;
  color: ${colors.bodyText};
  cursor: pointer;
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    position: absolute;
    top: 50%;
    left: 0;
    transform: rotate(45deg);
  }
  &:before {
    content '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    position: absolute;
    top: 50%;
    left: 0;
    transform: rotate(-45deg);
  }
`

const Content = styled.div`
  width: 80%;
  margin: 20rem auto 0;
  display: flex;
  flex-direction: row;
  div:first-child {
    flex-grow: 0.8;
  }
  div:last-child {
    flex-grow: 1.2;
  }
`
