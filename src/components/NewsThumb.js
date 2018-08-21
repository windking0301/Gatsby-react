import React from "react"
import styled from "styled-components"
import { below } from "../styles/functions"
import { colors, textStyles } from "../styles/vars"
import { H2, P } from "../components/Text"
import { ReadLink } from "../components/Button"
import Img from "gatsby-image"
import * as vars from "../styles/vars"

const NewsThumb = ({ src, title, text, to = "/" }) => (
  <NewsThumbContainer>
    <div className="Flex-Grid Flex-Grid--reverse wrapper">
      <a href={to} className="Flex-Grid-col image col-04 stacked">
        <Poster src={src} />
      </a>
      <TextWrap className="Flex-Grid-col col-06 padd stacked">
        <H2>{title}</H2>
        <P>{text}</P>
        <ReadLink to={to} />
      </TextWrap>
    </div>
  </NewsThumbContainer>
)

export default NewsThumb

const NewsThumbContainer = styled.div`
  h2 {
    font-size:3.25rem;
    margin-bottom: 20px;
  }
  p {
    max-width: 405px;
    margin-bottom:10rem;
  }
	.Grid-col.padd {
		padding-bottom: 0;
	}

  .Flex-Grid-col {
    position:relative;
  }

  ${below.desktop`
    .Flex-Grid-col.image {
      min-height:300px;
    }
    p {
      margin-bottom:4rem;
    }
  `};
  ${below.tablet`
    .Flex-Grid-col.image {
      min-height:240px;
    }
  `};
`
const TextWrap = styled.div`
  display:flex;
  flex-direction:column;
  border-bottom: 1px solid ${vars.colors.bg};
  min-height: 335px;
  padding-left:48px;

  h2 {
    margin-top:40px;
    width: 80%;
  }

  a {
    margin-top:auto;
    margin-bottom:40px;
  }

  ${below.desktop`
    padding-bottom:30px;
    padding-left:4rem;
    padding-right:4rem;
    a {
      margin-bottom:0;
    }
  `};
`

const Poster = styled.img`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  object-fit:cover;
`
