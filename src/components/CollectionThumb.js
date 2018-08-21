import React from "react"
import styled from "styled-components"
import { below } from "../styles/functions"
import { colors, textStyles } from "../styles/vars"
import { H1, H4 } from "../components/Text"
import { ReadLink } from "../components/Button"
import Img from "gatsby-image"
import * as vars from "../styles/vars"
import Link from "gatsby-link"

export function CollectionThumb({
   src = "",
   title = "",
   half = "",
   last = "",
   overlay = "",
   subTitle = "",
   to = ""
}) {
   if (half) {
      half = "Grid-col col-05 stacked"
   }
   if (last) {
      half += " last"
   }
   if (overlay) {
      overlay = half += " overlay"
   }
   return (
      <CollectionThumbContainer to={to} className={half}>
         <Poster src={src} />
         <TextWrap className="text">
            <div className="inner">
               <H4>{subTitle}</H4>
               <H1>{title}</H1>
            </div>
         </TextWrap>
      </CollectionThumbContainer>
   )
}




export default CollectionThumb

const CollectionThumbContainer = styled(Link)`
   min-height: 600px;
   position: relative;
   display: block;
   float: left;
   width: 100%;
   clear: none;
   color: ${vars.colors.white};
   text-decoration: none;
   filter: gray;
   -webkit-filter: grayscale(1);
   filter: grayscale(1);
   -webkit-transition: filter 1s ease, -webkit-filter 1s ease;
   -moz-transition: filter 1s ease, -webkit-filter 1s ease;
   -ms-transition: filter 1s ease, -webkit-filter 1s ease;
   -o-transition: filter 1s ease, -webkit-filter 1s ease;
   transition: filter 1s ease, -webkit-filter 1s ease;
   &:hover {
      filter: none;
      -webkit-filter: grayscale(0);
      .text {
         opacity: 1;
      }
   }

   &.overlay {
      &:after {
         content: "";
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         background-color: rgba(0, 0, 0, 0.1);
         pointer-events: none;
      }
   }

   ${below.desktop`
		min-height:460px;

		.text {
			opacity:1;

			h1 {
				font-size:6.5rem;
			}
		}
	`};

   ${below.tablet`
		min-height:380px;
		-webkit-filter: grayscale(0); 
		filter: none;

		&.Grid-col.stacked {
			float: left;
		}
		

  	&:hover {
  		-webkit-filter: grayscale(1); 
  		filter: grayscale(1); 
  	}
	`};
`
const Poster = styled.img`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
   object-position: 50% 0;
`

const TextWrap = styled.div`
   position: absolute;
   z-index: 1;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: rgba(0, 0, 0, 0.1);
   text-align: center;
   display: flex;
   width: 100%;
   height: 100%;
   opacity: 1;
   -webkit-transition: opacity 1s ease;
   -moz-transition: opacity 1s ease;
   -ms-transition: opacity 1s ease;
   -o-transition: opacity 1s ease;
   transition: opacity 1s ease;
   h1 {
      margin-bottom: 1.5rem;
   }
   h4 {
      color: ${vars.colors.white};
   }
   .inner {
      display: table-cell;
      vertical-align: middle;
      margin: auto;
   }
`
