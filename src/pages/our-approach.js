import React, { Component } from "react";
import FeatureBox           from "../components/FeatureBox";
import TwoCol               from "../components/two-col";
import { H2,H4 }            from "../components/Text"
import Img                  from "gatsby-image";
import GoogleMap            from "../components/GoogleMap"

class OurApproachPage extends Component {
	render() {
		if (typeof window !== `undefined`) {	
			return(
				<div>
					<FeatureBox dark=''  h2='We deliver nothing less than the highest standards of excellence and innovation, creating inspired boutique properties in well-connected suburbs.' imageSrc='/images/our-approach/bizzare.jpg' />
					<TwoCol title="Personal" text="With personalised customer service, we build enduring relationships as much as we do our projects. We take the time to know our clients and their requirements, working collaboratively to offer the best possible outcomes." image="/images/our-approach/nik-macmillan-280300.jpg" />
					<TwoCol title="The Perfect Location" text="We secure the most desirable locations for our projects, choosing neighbourhoods that offer future residents unparalleled convenience, accessibility and potential growth, with schools, public transport, shops and open green spaces at their doorstep." image='/images/loc.jpg' odd="true" />
					<TwoCol title="Boutique quality" text="Passionate about exceptional quality, every detail is thoughtfully considered, from the flow of spaces to the choice of materials. There is a sense of home to each residence we bring to life. " image='/images/OurApproach_charles-deluvio-453897-unsplash_650x500.jpg' />
					<TwoCol title="Inspired Design" text="Collaborating with well-renowned architects and interiors designers, we bring global inspiration into each project, creating new living experiences informed by the site, architectural vision and location." image='/images/collec.jpg' odd="true" />
				</div>
			)
		} else {
			return(<p>Build</p>)
		}
	}
}




export default OurApproachPage

export const ApproachQuery = graphql`
  query ApproachPageQuery {
		ApproachHero01: imageSharp(id: { regex: "/approch-01/" }) {
			sizes(maxWidth: 1300) {
				...GatsbyImageSharpSizes
			}
		}
		ApproachHero02: imageSharp(id: { regex: "/approch-02/" }) {
			sizes(maxWidth: 1300) {
				...GatsbyImageSharpSizes
			}
		}
		ApproachHero03: imageSharp(id: { regex: "/approch-03/" }) {
			sizes(maxWidth: 1300) {
				...GatsbyImageSharpSizes
			}
		}
		ApproachHero04: imageSharp(id: { regex: "/approch-04/" }) {
			sizes(maxWidth: 1300) {
				...GatsbyImageSharpSizes
			}
		}
		ApproachHero05: imageSharp(id: { regex: "/approch-05/" }) {
			sizes(maxWidth: 1300) {
				...GatsbyImageSharpSizes
			}
		}
    mapMarkers: allMarkersYaml {
      edges {
        node {
          lat
          lng
          name
        }
      }
    }
  }
`