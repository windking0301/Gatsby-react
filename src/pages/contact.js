import React, { Component } from "react";

import FeatureBox    from "../components/FeatureBox";
import { H2, H4, P } from "../components/Text";
import GoogleMap     from "../components/GoogleMap"
import RegisterForm  from "../components/RegisterForm";
import MailingForm   from "../components/MailingForm";
import styled        from "styled-components";
import { below }     from "../styles/functions";

class ContactPage extends Component {
		render() {
			if (typeof window !== `undefined`) {	
				return(				
					<div>
						<Banner>
							<h2>
								<p>
								Whether you're looking for a large-scale investment solution, or<br /> simply to create or enjoy a comfortable retirement, Landis can help.
								</p>
								<p>
								Speak to the team or fill in the contact form and someone will be in<br /> touch with you shortly.
								</p>
							</h2>
						</Banner>
						<div className='Grid wrapper border-top' >
							<div className='Grid-col col-04 stacked padd-left' >
								<H2>Get in touch </H2>
								<P>Landis Property <br/>6A Como Centre, 299 Toorak Rd, <br/>South Yarra VIC 3141</P>
								<Bolded>Phone</Bolded>
								<P>1300 303 362</P>
								<Bolded>Email</Bolded>
								<P>enquiries@landisproperty.com.au</P>
							</div>
							<div className='Grid-col col-06 stacked' style={{height: '600px'}} >
								<GoogleMap markers={this.props.data.mapMarkers.edges} />
							</div>
						</div>
						<div className='Grid grey' >
							<div className='wrapper' >
								<div className='Grid-col col-04 stacked padd' >
									<H2>Inquiry Form</H2>
								</div>
								<div className='Grid-col col-06 stacked padd-t-b' >
									<RegisterForm />
								</div>
							</div>
						</div>
					</div>
				)
			} else {
				return(<p>Build</p>)
			}
		}
	}
	export default ContactPage
	
const Banner = styled.div`
	padding:9rem 0;

	p {
		margin-bottom:2rem;
	}

	h2 {
		text-align:center;
		color: #666;
		font-size: 3rem;
		line-height: 1.4;
		font-weight: 200;
		margin-bottom: 2.7rem;
	}

	${below.tablet`
		padding:8rem 15px;

		h2 {
			font-size:2.4rem;
			line-height:1.3;
		}
	`};
`
const Bolded = styled.div`
	margin-bottom:10px;
	color:#000;
	font-weight:700;
	font-size:1.2rem;
	letter-spacing:4px;
	text-transform:uppercase;
`

const Subtitle = styled.div`
	color: #666;
	font-size: 3rem;
	line-height: 1.4;
	font-weight: 200;
	margin-bottom: 2.7rem;
	${below.tablet`
		font-size:2rem;
		line-height:1.3;
	`};
`

export const ContactQuery = graphql`
  query ContactPageQuery {
		ContactHero01: imageSharp(id: { regex: "/contact-01/" }) {
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
