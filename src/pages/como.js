import React          from "react"
import Collapsible from 'react-collapsible';
import styled         from "styled-components";
import { textStyles } from '../styles/vars'
import { below }     from "../styles/functions";
import { GoLink } from "../components/FindLink"
const PLinks = function( {data} ) {
	return(
		<div>
			<div className="wrapper padd">  
				<H1>No.1 Como</H1> 
				<Banner> 
					<div className="Grid">
						<div className="Grid-col col-05 stacked">
						<ButtonContainer className="Button" download href="/images/agents-login/como.zip" >Download ALL</ButtonContainer>
						</div>
					</div>
				</Banner>
				<Banner> 
				<div className="Grid">
					<div className="Grid-col col-05 stacked">
						<SubButton className="Button" href="/images/agents-login/agent-agreement.pdf" target="_blank" >Agent Agreement</SubButton>
					</div> 
					<div className="Grid-col col-05 stacked">
						<SubButton className="Button" href="/images/agents-login/como/brochure.pdf" target="_blank" >Brochure</SubButton>
					</div> 
				</div>
				</Banner> 
				<Banner> 
				<div className="Grid">
					<div className="Grid-col col-05 stacked">
						<SubButton className="Button" href="/images/agents-login/como/video-v2.mp4" target="_blank" >Master Video</SubButton>
					</div> 
					<div className="Grid-col col-05 stacked">
						<SubButton className="Button" href="/images/agents-login/como/como.jpg" target="_blank" >Renders</SubButton>
					</div> 
				</div>
				</Banner>
				<Banner> 
					<div className="Grid">
						<div className="Grid-col col-05 stacked">
							<SubButton className="Button" href="/images/agents-login/como/reservation-form.pdf" target="_blank" >Reservation</SubButton>
						</div>
						<div className="Grid-col col-05 stacked">
							<SubButton className="Button" href="/images/agents-login/como/floorplan.pdf" target="_blank" >Floor Plans</SubButton>
						</div>
					</div>
				</Banner>
				<Banner>
					<div className="Grid">
						<div className="Grid-col col-05 stacked">
							<SubButton className="Button" href="/images/agents-login/como/pricelist-detailed.pdf" target="_blank" >Pricelist</SubButton>
						</div>
						<div className="Grid-col col-05 stacked">
							<SubButton className="Button" href="/contact" target="_blank" >Contact</SubButton>
						</div> 
					</div>
				</Banner>
      </div>
		</div>
	)
}



export default PLinks

const ButtonContainer = styled.a`
	border: 1px solid currentColor; 
	 
	${below.iphone`
		margin-left: 80px; 
	`};
	${below.tablet`
		margin-left: 165px; 
	`};
	${below.phone`
		margin-left: 3px; 
	`};
	margin-bottom: 50px;
	margin-left: 120px;
	${below.phone`
		margin-bottom: 25px;
	`};
	color: #000;
	font-family: 'Neutra Text TF';
	font-weight:normal; 
  height: 4.5em;
  ${below.phone`
  	height: 4.2em;
	`};
	:hover {
    background-color: #000;
    color: white;
	} 
  text-align: center;
  padding: 0 6.916666666666667em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 8em;
  transition: all 0.2s linear;
  white-space: nowrap;
  border-radius: 0;
	background: none; 
	font-size: 13px;
	line-height: 1;
	letter-spacing: 0.33em;
	text-transform: uppercase;	
	cursor: pointer;
` 
const SubButton = styled.a`
border: 1px solid currentColor;
color: #000; 
font-family: 'Neutra Text TF';
text-shadow: 0px 0px #000;
font-weight:500;
height: 5.2em;
margin-left:auto;
margin-right:auto;
${below.phone`
	height: 5em;
`};
:hover {
	background-color: #000;
	color: white;
} 
text-align: center;
padding: 0 6.916666666666667em;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-decoration: none;
width: 22em;
${below.phone`
	width: 100%;
`};
transition: all 0.2s linear;
white-space: nowrap;
border-radius: 0;
background: none; 
font-size: 1.5rem;
line-height: 1;
letter-spacing: 0.33em; 
cursor: pointer;
${below.phone`
margin-bottom: 1.5em;
`}; 
margin-bottom:3em;
`
const Banner = styled.div` 
  p {
    margin-bottom: .1rem;
  }

  h2 {
    text-align:left;
    color: #000;
    font-size: 1.8rem;
    line-height: 1.2;
    font-weight: 200;
    border-bottom: 2px solid #ddd;
		position: relative;

		&:first-of-type{
			border-top: 2px solid #ddd;

		}
  }
  
  .Collapsible__trigger {
    font-size: 2rem;
    font-weight: 500;
    color: #000;
    display: block;
		padding: 15px 20px;
		cursor: pointer;

		position: relative;
		&:after{
			content: '';
			display: block; 
			width: 20px; 
			height: 20px;
			position: absolute;
			right:15px;
			top: 20px;
			background-size: cover;
			background-image: url('/images/right.png');
		}
  }
  span.Collapsible__trigger.is-open {
		&:after{
			transform: rotate(90deg);

		}
  }
  .Collapsible__contentInner {
		padding: 15px 20px;
		img{
			width: 45%;
			margin: 2%;
			display:inline-block;
			${below.tablet`
				width: 100%;
				`};
		}
  }
	.Collapsible__contentOuter{
		background: #F3F3F3;
	}

  ${below.tablet`
    padding:0rem 15px;

    h2 {
      font-size:2.4rem;
      line-height:1.3;
    }
  `};
`
const H1 = styled.h1`
  ${textStyles.h1}
  color:#000;
  padding-bottom:30px;
  padding-top:60px;
  &.padd{
    padding-top:4.5rem;
    padding-bottom:4.5rem;
  }
`

const Embed = styled.embed`
	width: 100%;
	height: 500px;
	border: 2px solid #666;

`
const Video = styled.video`
	width: 100%;
	height: 500px;
	max-width: 500px;

`

const Download = styled.a`
			display: block; 
			width: 20px; 
			height: 20px;
			position: absolute !important;
			right:45px;
			top: 20px;
			background-size: cover;
			background-image: url('/images/download.png');
			padding:0 !important;
			&:after{
				display: none !important;
			}
`

const Hr = styled.hr`
  margin:0;
  border-style:none;
`
