import React, { Component } from "react"
import styled from "styled-components"
import { below } from "../styles/functions"
import FeatureBox from "../components/FeatureBox"
import { H1, H2, H3, H4, P, Text } from "../components/Text"
import { Carousel } from "react-responsive-carousel"
import RegisterForm from "../components/RegisterForm"

class ProjectTemplate extends Component {
   render() {
      let Components
      let attrs = ""
      let photo = 0
      let node = this.props.data.allProjectsYaml.edges[0]
      const { name, text, subtext, hero, overlay, options } = node.node
      let carousel
      let carousel02
		let form
      let subBanner
      let subBanner01
      if (options.text) {
         subBanner = (
            <Banner>
               <h4 dangerouslySetInnerHTML={{ __html: options.text }} />
            </Banner>
         )
      }
      if (options.title02) {
         subBanner01 = (
            <Callout>
               <p>{options.title02 ? options.title02 : ""}</p>
               <h4 dangerouslySetInnerHTML={{ __html: options.text02 }} />
            </Callout>
         )
      }
      if (options.carousel) {
         var arr = []
         options.carousel.map((img, i) => {
            arr.push(
               <div key={i}>
                  <img src={img} />
               </div>
            )
         })
         carousel = (
            <Carousel
               showThumbs={false}
               showStatus={false}
               autoPlay={true}
               interval={2500}
               transitionTime={500}
               infiniteLoop={true}>
               {arr}
            </Carousel>
         )
      }
      if (options.carousel02) {
         var arr = []
         options.carousel02.map((img, i) => {
            arr.push(
               <div key={i}>
                  <img src={img} />
               </div>
            )
         })
         carousel02 = (
            <Carousel
               showThumbs={false}
               showStatus={false}
               autoPlay={true}
               interval={2500}
               transitionTime={500}
               infiniteLoop={true}>
               {arr}
            </Carousel>
         )
      }
		if (node.node.url == 'como-apartments' || node.node.url == 'glassworks') {
			form = (
				<FormWrap className="Grid-col col-06 stacked padd-t-b ">
					<H4>Enquire Now</H4>
					<RegisterForm />
				</FormWrap>
			)

      }
      if (options.carousel) {
         return (
            <div>
               <FeatureBox h1={name} imageSrc={hero} overlay={overlay} vid={name} />
               <Banner>
                  <h4 dangerouslySetInnerHTML={{ __html: text }} />
               </Banner>
					{form}
               {carousel}
					{subBanner}
               {carousel02}
               {subBanner01}
            </div>
         )
      }
    
   }
}
export default ProjectTemplate

export const FormWrap = styled.div`
	margin: auto;
	float: none !important;
	h4 {
		text-align: center;
		padding-bottom: 40px;
	}
	
`

export const Banner = styled.div`
   padding: 100px 0;
   text-align: center;
   background-color: #f1f1f1;

   h4 {
      padding: 0 40px;
      color: #666;
      font-size: 3.5rem;
      line-height: 1.6;
      font-weight: 200;
      margin-bottom: 2.7rem;
      max-width: 1200px;
      margin: auto;
   }

   ${below.desktop`
		br {
			display:none;
		}
	`};

   ${below.tablet`
		h4 {
			font-size:2.8rem;
			line-height:1.5;
		}
	`};
`
export const Callout = styled.div`
   padding: 140px 0;
   text-align: center;

   p {
      margin-bottom: 20px;
      color: #000;
      font-size: 1.3rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 3px;
   }

   h4 {
      padding: 0 40px;
      color: #777;
      font-size: 2.4rem;
      font-weight: 300;
      line-height: 1.4;
      margin-bottom: 2.7rem;
      max-width: 900px;
      margin: auto;
   }

   ${below.desktop`
		br {
			display:none;
		}
	`};

   ${below.tablet`
		padding:100px 0;
	`};
`
export const ProjectQuery = graphql`
   query ProjectQuery($url: String!) {
      allProjectsYaml(filter: { url: { eq: $url } }) {
         edges {
            node {
               name
               url
               text
               hero
               overlay
               options {
                  carousel
                  text
                  carousel02
                  title02
                  text02
               }
            }
         }
      }
   }
`
