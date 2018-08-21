import React from "react"
import styled, { ThemeProvider } from "styled-components"
import "whatwg-fetch"
import { below } from "../styles/functions"


import { colors, textStyles } from '../styles/vars'
import Input from "../components/Input"
import { Submit} from "../components/Button"
import { H2, P} from "../components/Text"

const theme = {
  color: colors.gold,
  backgroundColor: colors.white,
  paddingLeft: "1rem",
  fontSize: "1.5rem"
}

class RegisterForm extends React.Component {
  constructor() {
    super()
    this.state = {
      formStatus: "incomplete",
      values: {}
    }

    this.updateForm = this.updateForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  updateForm(e) {
    let values = this.state.values
    values[e.target.getAttribute("name")] = e.target.value
    this.setState({ values })
  }

  handleSubmit(e) {
    e.preventDefault()
    const fields = [].slice.call(e.target.querySelectorAll("[name]"))
    fields.map(f => {
      let values = this.state.values
      values[f.getAttribute("name")] = f.value
    })
		let page;
		let api;
		if (typeof window !== `undefined`) {

			page = window.location.href;
			this.state.values.Page_Enquired_From = page;
			if(window.location.pathname == '/collections/como-apartments') {
				api = 'https://vds9c5imf1.execute-api.ap-southeast-2.amazonaws.com/prod/landis-como-v2';
			} else {
				api = 'https://vds9c5imf1.execute-api.ap-southeast-2.amazonaws.com/prod/landis-v2';
			}
	}
		fetch(
      api,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.state.values)
      }
    )
      .then(res => res.json())
      .then(json => {
        console.log(json)
        console.log("Tag manager push here")
        let formStatus = "complete"
        this.setState({ formStatus })
      })
			.catch(err => console.log(err))
  }
  render() {
    return (
      <Container>
        {this.state.formStatus === "complete" ? (
          <div>
            <H2>Thank you for registering</H2>
            <P>
              One of our agents will be in contact with you soon.
            </P>
          </div>
        ) : (
          <ThemeProvider theme={theme}>
            <Form action="" onSubmit={this.handleSubmit}>
              <Field>
                <Input
                  name="first_name"
                  label="First Name"
                  onChange={this.updateForm}
                />
              </Field>
              <Field>
                <Input
                  name="last_name"
                  label="Last Name"
                  onChange={this.updateForm}
                />
              </Field>
              <Field >
                <Input
                  name="email"
                  type="email"
                  label="Email"
                  onChange={this.updateForm}
                />
              </Field>
              <Field >
                <Input
                  name="phone"
                  type="phone"
                  label="Phone"
                  onChange={this.updateForm}
                />
              </Field>
              <Field className="full tall">
                <Input
                  name="message"
                  type="textarea"
                  label="Message"
                  className="tall"
                  onChange={this.updateForm}
                />
              </Field>
              <Submit value='submit' />
            </Form>
          </ThemeProvider>
        )}
      </Container>
    )
  }
}

export default RegisterForm

const Container = styled.div`

`


const Form = styled.form`

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Field = styled.div`
  width: calc(50% - 1rem);
  display: inline-block;
  margin-bottom: 2rem;
  &.full {
    width:100%;
  }
  &.tall {
    height:10rem;
  }
  @supports (display: flex) {
    display: block;
  }
  ${below.tablet`
    width: 100%;
  `};
`

const ThankYouText = styled.p`
  font-size: 1.5rem;
  color: ${colors.white};
  text-align: center;

  ${below.tablet`
    font-size: 1.3rem;
  `};
`
