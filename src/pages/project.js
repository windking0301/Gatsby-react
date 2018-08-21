import React         from "react";
import FeatureBox    from "../components/FeatureBox";
import { H2, P, H4 } from "../components/Text";
import { Carousel }  from 'react-responsive-carousel';
import styled        from 'styled-components'

const ProjectPage = ({ data }) => (
  <div>
		<FeatureBox  dark='' h1='Blue Skies' src={data.ProjectHero01.sizes}   />
		<div className="txtWrap " >
			<H2 className="wrapper sml padd" >A brand new architecturally designed residential development, Blue Skies delivers 53 magnificently spacious townhouses of 3-4 bedrooms in one of Queensland’s fastest growing regions. </H2>
		</div>
		<FeatureBox   src={data.ProjectHero02.sizes}    />
		<div className="txtWrap grey" >
			<P className="wrapper sml padd" >Perfect for modern, family-style living, it is a beautiful and secure community with a 24-hour onsite manager. </P>
			<P className="wrapper sml padd" >Presenting strong rental yields and demand, Blue Skies offers sound fundamentals for investment with close proximity to retail and commercial precincts, public transport, schools, hospitals and infrastructure.</P>
		</div>
		<FeatureBox   src={data.ProjectHero04.sizes}    />
		<div className="txtWrap " >
			<Bolded>The Perfect Location</Bolded>
			<P className="wrapper sml padd" >Why we chose this location etc etc... Evel imet latum quas ipsae posanih ilibus et lab ipsum quae et doloriam ad quis dest volupta temqui doluptaecto vendipsa si voloribusant eari rem evenda</P>
		</div>
		<Carousel showThumbs="false" showStatus={false} showIndicators={false} >
			<div>
			    <img src="/images/collections/cedar-apartments/Bedroom Cedar Stage 2.jpg" />
			</div>
			<div>
			    <img src="/images/collections/cedar-apartments/Y14M02D26 CedarApartments03.jpg" />
			</div>
			<div>
			    <img src="/images/collections/cedar-apartments/Y14M02D26 CedarApartments04.jpg" />
			</div>
	  </Carousel>
	</div>
)

const Bolded = styled.h4`
	color:#000;
	font-size:1.3rem;
	font-weight:700;
	text-align:center;
	text-transform:uppercase;
	letter-spacing:3px;
`



export default ProjectPage

export const ProjectQuery = graphql`
query ProjectPageQuery {
	ProjectHero01: imageSharp(id: { regex: "/project-01/" }) {
		sizes(maxWidth: 1300) {
			...GatsbyImageSharpSizes
		}
	}
	ProjectHero02: imageSharp(id: { regex: "/project-02/" }) {
		sizes(maxWidth: 1300) {
			...GatsbyImageSharpSizes
		}
	}
	ProjectHero03: imageSharp(id: { regex: "/project-03/" }) {
		sizes(maxWidth: 1300) {
			...GatsbyImageSharpSizes
		}
	}
	ProjectHero04: imageSharp(id: { regex: "/project-04/" }) {
		sizes(maxWidth: 1300) {
			...GatsbyImageSharpSizes
		}
	}
}
`