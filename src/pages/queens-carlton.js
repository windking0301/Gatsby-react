import React          from "react"
import Collapsible from 'react-collapsible';
import styled         from "styled-components";
import { textStyles } from '../styles/vars'
import { below }     from "../styles/functions";

const PLinks = function( {data} ) {
	return(
		<div>
			<div className="wrapper padd">
				<H1>Queens Carlton</H1>
				<ButtonContainer className="Button" download href="/images/agents-login/queens-carlton-zip.zip" >Download</ButtonContainer>
        <Banner>
				<h2>
            <Collapsible trigger="Agent Agreement">
							<Download className="Collapsible__trigger" href="/images/agents-login/agent-agreement.pdf" download />
							<Embed src="/images/agents-login/agent-agreement.pdf" type='application/pdf' />

            </Collapsible>
          </h2>
					<h2>
            <Collapsible trigger="Brochure">
							<Download className="Collapsible__trigger" href="/images/agents-login/queens-carlton/brochure.pdf" download />
							<Embed src="/images/agents-login/queens-carlton/brochure.pdf" type='application/pdf' />

            </Collapsible>
          </h2>
					<h2>
            <Collapsible trigger="Fly-Through Video">
							<Download className="Collapsible__trigger" href="/images/agents-login/queens-carlton/fly-through.mp4" download />
							<Video  controls >
								<source src="/images/agents-login/queens-carlton/fly-through.mp4" type="video/mp4" />
							</Video>

            </Collapsible>
          </h2>
					<h2>
            <Collapsible trigger="Renders">
							<Download className="Collapsible__trigger" href="/images/agents-login/queens-carlton/renders.zip" download />
							<img src="/images/agents-login/queens-carlton/renders/01.jpg" />
							<img src="/images/agents-login/queens-carlton/renders/02.jpg" />
							<img src="/images/agents-login/queens-carlton/renders/03.jpg" />
							<img src="/images/agents-login/queens-carlton/renders/04.jpg" />

            </Collapsible>
          </h2>
					<h2>
            <Collapsible trigger="Rental Appraisal">
							<Download className="Collapsible__trigger" href="/images/agents-login/queens-carlton/rental-estimate.pdf" download />
							<Embed src="/images/agents-login/queens-carlton/rental-estimate.pdf" type='application/pdf' />

            </Collapsible>
          </h2>
					<h2>
            <Collapsible trigger="Floor Plans">
							<Download className="Collapsible__trigger" href="/images/agents-login/queens-carlton/floor-plans.pdf" download />
							<Embed src="/images/agents-login/queens-carlton/floor-plans.pdf" type='application/pdf' />

            </Collapsible>
          </h2>
					<h2>
            <Collapsible trigger="Contract">
							<Download className="Collapsible__trigger" href="/images/agents-login/queens-carlton/contract.pdf" download />
							<Embed src="/images/agents-login/queens-carlton/contract.pdf" type='application/pdf' />

            </Collapsible>
          </h2>
					<h2>
            <Collapsible trigger="Photos">
							<Download className="Collapsible__trigger" href="/images/agents-login/queens-carlton/photos.zip" download />
							<img src="/images/agents-login/queens-carlton/photos/01.jpg" />
							<img src="/images/agents-login/queens-carlton/photos/02.jpg" />
							<img src="/images/agents-login/queens-carlton/photos/03.jpg" />
							<img src="/images/agents-login/queens-carlton/photos/04.jpg" />

            </Collapsible>
          </h2>
         
        </Banner>
      </div>
		</div>
	)
}



export default PLinks

const ButtonContainer = styled.a`
  border: 1px solid currentColor;
  color: #666;
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
	background: none;
	font-size: 1.3rem;
		line-height: 1;
		letter-spacing: 0.33em;
		text-transform: uppercase;	
		cursor: pointer;
`

const Banner = styled.div`
  padding: 4rem 0;

  p {
    margin-bottom: .1rem;
  }

  h2 {
    text-align:left;
    color: #666;
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
    padding:8rem 15px;

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