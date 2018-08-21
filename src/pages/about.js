import React from "react";
import FeatureBox from "../components/FeatureBox";

const AboutPage = ({ data }) => (
  <div>
		<FeatureBox dark='' upTitle='A family business' h2='Quality, longevity and trust are important to us. As a family business, we stake our reputation in everything we do. We are proud to deliver beautiful residences that will last from one generation to the next.' imageSrc='/images/about/water.jpg' />
		<FeatureBox dark='' upTitle='A wealth of experience' h2='Landis founder and director Terry Livanidis brings over 35 years of personal experience in property development to the table. As a team, Landis is a collective of professional experts from different fields within the industry.' imageSrc='/images/about/sand.jpg' />
		<FeatureBox dark='' upTitle='Our Promise' h2='We create inspired boutique properties defined by modern luxury, innovation and exceptional living, delivering the lifestyle people aspire to.' imageSrc='/images/about/gold.jpg' />
  </div>
)



export default AboutPage

export const AboutQuery = graphql`
  query AboutPageQuery {
		AboutHero01: imageSharp(id: { regex: "/about-01/" }) {
			sizes(maxWidth: 1300) {
				...GatsbyImageSharpSizes
			}
		}
		AboutHero02: imageSharp(id: { regex: "/about-02/" }) {
			sizes(maxWidth: 1300) {
				...GatsbyImageSharpSizes
			}
		}
  }
`
