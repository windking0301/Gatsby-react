import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { colors, headerHeight, textStyles } from '../styles/vars'
import { below } from '../styles/functions'
import LandisLogo from '../icons/LandisLogo'
import Button from '../components/Button'
import { H1, H2, H3, H4, P } from '../components/Text'

	import YoutubeModal from "react-youtube-modal";
export default function FeatureBox({
   overlay = '',
   hover = '',
   imageSrc = '',
   src = '',
   logo = '',
   to = '',
   buttonText = '',
   upTitle = '',
   large = '',
   subTitle = '',
   h1 = '',
   h2 = '',
   p = '',
	 dark = '',
	 vid = ''
}) {
   if (src) {
      if (to) {
         src = (
            <a href={to} className="bg-wrap">
               <Img sizes={src} />
            </a>
         )
      } else {
         src = (
            <div className="bg-wrap">
               <Img src={src} />
            </div>
         )
      }
   }
   if (imageSrc) {
      imageSrc = (
         <div
            className={'bg-wrap ' + (hover ? 'hover ' : '') + (overlay ? 'overlay' : '')}>
            <Poster src={imageSrc} />
         </div>
      )
   }
   if (logo) {
      logo = <LandisLogo width="495" fill="#fff" />
   }
   if (upTitle) {
      upTitle = <H3 className="upTitle">{upTitle}</H3>
   }
   if (subTitle) {
      subTitle = <H3 className="subTitle">{subTitle}</H3>
   }
   if (h1) {
      h1 = <H1>{h1}</H1>
   }
   if (h2) {
      h2 = <H2>{h2}</H2>
   }
   if (p) {
      p = <P>{p}</P>
   }
   if (buttonText) {
      buttonText = <Button children={buttonText} to={to} color="white" />
   } else if (typeof window !== `undefined` && vid && vid == "Como Apartments") {
		buttonText =  <YoutubeModal videoId="lQJM6UR0y1g" width="900px" ><button type="button">Play Video</button></YoutubeModal>

	 }

   return (
      <Container className="" large={large} dark={dark}>
         {imageSrc}
         <div className="inner wrapper padd">
            {upTitle}
            {logo}
            {h1}
            {h2}
            {p}
            {subTitle}
            {buttonText}
         </div>
      </Container>
   )
}

const Container = styled.section`
   width: 100vw;
   height: 600px;
   color: ${props => (props.dark ? '#646464' : '#ffffff')};
   height: ${props => (props.large ? '100vh' : '600px')};
   position: relative;
   vertical-align: middle;
   text-align: center;
   padding: 0 50px;
   overflow: hidden;
   display: table;
   ${below.phone`
			max-height: 740px;
			padding:0;
		`};
   h2 {
      max-width: 867px;
      margin: auto;
      font-weight: lighter;
   }
   .upTitle {
      ${textStyles.h4} color: white;
      margin-bottom: 3rem;
   }
   .subTitle {
      margin-top: 2rem;
   }
   p {
      max-width: 54rem;
      margin: auto;
   }
   svg {
      width: 49.5rem;
      height: 14.9rem;
   }
   svg,
   svg * {
      fill: #ffffff;
   }
   * {
      color: ${props => (props.dark ? '#646464' : '#ffffff')};
   }
   .bg-wrap {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      z-index: 1;
      .gatsby-image-outer-wrapper,
      .gatsby-image-wrapper {
         width: 100%;
         height: 100%;
         position: absolute;
         left: 0;
         right: 0;
         top: 0;
         bottom: 0;
         margin: auto;
         z-index: 1;
      }

      &.overlay {
         &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.15);
            pointer-events: none;
         }
      }
   }
   .inner {
      position: relative;
      z-index: 2;
      display: table-cell;
      vertical-align: middle;
   }
   .Button, button {
      position: absolute;
      bottom: 65px;
      left: 0;
      right: 0;
      margin: auto;
   }
	 button{
		border: 1px solid #fff;
  color: #fff;
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
	background: rgba(255,255,255,0.2);
  ${textStyles.h4}
  color: #fff;
	&:hover {
    background-color: #fff;
    color: #666;
  }
	 }
`

const Poster = styled.img`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
`
