import React from "react"
import styled, { css } from "styled-components"
import { colors, textStyles } from "../styles/vars"


class Input extends React.Component {
  constructor() {
    super()
    this.state = {
      fieldStatus: "empty",
      value: ""
    }
  }
  setFocused() {
    this.setState({ fieldStatus: "focused" })
  }
  setBlured() {
    if (this.input.value.length > 0) {
      this.setState({ fieldStatus: "focused" })
    } else {
      this.setState({ fieldStatus: "empty" })
    }
  }
  updateValue(e) {
    this.value = this.input.value
    this.props.onChange(e)
  }
  render() {
    let type = this.props.type ? this.props.type : "text"
    let options1 = null

    if (this.props.options) {
      options1 = this.props.options.map(function(opt, i) {
        return (
          <option key={i} value={opt.value}>
            {opt.label}
          </option>
        )
      })
    }
    return (
      <Wrapper className={this.props.className || ''}>
        <Label
          htmlFor={this.props.name}
          populated={this.state.fieldStatus}
          ref="label"
        >
          {this.props.label}
        </Label>
        {type != "select" && type != "textarea" ? (
          <Field
            type={type}
            name={this.props.name}
            innerRef={comp => {
              this.input = comp
            }}
            required
            onFocus={this.setFocused.bind(this)}
            onBlur={this.setBlured.bind(this)}
            onChange={this.updateValue.bind(this)}
          />
        ) : ((type !== 'textarea') ?
          (
          <div>
            <Select
              name={this.props.name}
              innerRef={comp => {
                this.input = comp
              }}
              required
              onFocus={this.setFocused.bind(this)}
              onBlur={this.setBlured.bind(this)}
              onChange={this.updateValue.bind(this)}
            >
              <option value="" hidden />
              {options1}
            </Select>
            <Arrow />
          </div>
          ) : (
            <div>
              <Textarea
                name={this.props.name}
                innerRef={comp => {
                  this.input = comp
                }}
                required
                onFocus={this.setFocused.bind(this)}
                onBlur={this.setBlured.bind(this)}
                onChange={this.updateValue.bind(this)}
                >
              </Textarea>
            </div>
          )
        )}
      </Wrapper>
    )
  }
}

const themeDefaults = {
  color: "#000",
  backgroundColor: "#f1f1f1",
  paddingLeft: "1em",
  fontSize: "1rem"
}

const Wrapper = styled.div`
  width: 100%;
  height: 2.5em;
  display: block;
  position: relative;
  color: ${colors.bodyText};
  font-size: 14px;
  margin-bottom: 2rem;
  &.tall {
    height:10rem;
  }
  &:after {
    content: "";
    display: block;
    height: 1px;
    width: 100%;
    background-color: ${colors.bodyText};
    position: absolute;
    bottom: 0;
    left: 0;
  }
`

const Label = styled.label`
  position: absolute;
  height: 1em;
  line-height: 1em;
  display: block;
  top: 0.2rem;
  left: 0;
  z-index: 1;
  transition: all 0.05s;
  color: ${colors.bodyText};
  box-sizing: content-box;
  ${textStyles.p} ${props =>
      props.populated == "focused"
        ? `
      font-size: 0.7em;
      line-height: 1;
      top: -1em;
	  opacity: 0.8;
	  margin-left: 0em;
    `
        : ``};
`

const Field = styled.input`
  display: block;
  width: 100%;
  height: 1.2em;

  box-sizing: content-box;
  box-shadow:none;
  border: none;
  position: relative;
  z-index: 2;
  background-color: transparent;
  border-radius: 0;
  outline: none;
  margin: 0;
  top: 0;
  color: ${colors.bodyText};
  ${textStyles.p} appearance: none;
  -webkit-appearance: none;

  > option {
    color: ${colors.bodyText};
  }
`

const Select = Field.withComponent("select")

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  height:10rem;

  box-sizing: content-box;
  box-shadow:none;
  border: none;
  position: relative;
  z-index: 2;
  background-color: transparent;
  border-radius: 0;
  outline: none;
  margin: 0;
  top: 0;
  color: ${colors.bodyText};
  ${textStyles.p} appearance: none;
  -webkit-appearance: none;

  > option {
    color: ${colors.bodyText};
  }
`

const Arrow = styled.div`
  position: absolute;
  top: 60%;
  right: 0;
  z-index: 1;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0.375em 0.375em 0 0.375em;
  border-color: currentColor transparent transparent transparent;
`


export default Input
