import React                  from "react";
import FeatureBox             from "../components/FeatureBox";
import { colors, textStyles } from "../styles/vars"
import { below }              from "../styles/functions"
import styled                 from "styled-components"


const IndexPage =  function({ data }) {
	let photo = 0;
	return(
    <div>
		<FeatureBox logo='true'  dark='' large='true' imageSrc='/images/homepage/city.jpg' />
		<div className="txtWrap grey" >
			<H2 className="wrapper sml padd" >Landis Property is one of Australia’s leading boutique residential developer. Known for combining sought-after locations with stunning and clever designs, our developments have consistently delivered secure returns. <br/>Landis has completed over 3,400 quality residences to a value of $900 million.</H2>
		</div> 
		<FeatureBox overlay='true' hover="true" to="/collections/como-apartments" imageSrc="/images/collections/como/01.jpg" h1="Como Apartments" key="1" subTitle="Coming soon to Malvern"  large='true' buttonText='Find Out more' />
		<FeatureBox overlay='true' hover="true" to="/collections/queens-carlton" imageSrc="/images/collections/queens-carlton/img-01.jpg" h1="Queens Carlton" key="2" subTitle=""  large='true' buttonText='Find Out more' />
		<FeatureBox overlay='true' hover="true" to="/collections/grace-apartments" imageSrc="/images/collections/grace-apartments/grace-hero.jpg" h1="Grace Apartments" key="3" subTitle=""  large='true' buttonText='Find Out more' />
		<FeatureBox h1='Explore the collection' to="/collections" large='true' imageSrc="/images/homepage/explore the collection_colour.jpg" to='/collections' buttonText='Explore' />
			
	</div>
	)
}

const H2 = styled.h2`
	color: #666;
	font-size: 3rem;
	line-height: 1.4;
	font-weight: 200;
	margin-bottom: 2.7rem;
`



export default IndexPage;
export const query = graphql `
	query HomeHeroQuery {
		projects: allProjectsYaml(filter: { home : {eq: true}}) {
			edges {
				node {
					home
					name
					url
					subtitle
				}
			}
		}
		
	}
`;

