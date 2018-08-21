import React                                from "react";
import styled                               from "styled-components";
import Img                                  from "gatsby-image";
import { colors, headerHeight, textStyles } from "../styles/vars";
import { below }                            from "../styles/functions";
import LandisLogo                           from "../icons/LandisLogo";
import Button                               from "../components/Button";
import { H1, H2, H3, H4, P }                from "../components/Text";

export default function TwoCol({ title="", text="", image="", odd=false }) {

		if (image) {
			image = (
				<div className="Posterwrap">
					<Poster src={image} />
				</div>
			);
		}

    return (

			<Container>
				<div className={"Flex-Grid " + (odd ? 'Flex-Grid--reverse' : '')}>
					<div className="Flex-Grid-col">
						{image}
					</div>
					<div className='Flex-Grid-col'>
						<div className="inner">
						<Title>
						{title}
						</Title>
						<Text dangerouslySetInnerHTML={{__html: text}}>
						</Text>

						</div>
					</div>
				</div>
			</Container>
    );
}

const Title = styled.p`
	${textStyles.h4}
	padding-bottom:25px;
	font-weight: bold;


	${below.tablet`
		font-size:1.3rem;
		padding-bottom:15px;
	`};
`

const Text = styled.h3`
	color: #333;
	font-size: 2.35rem;
	line-height: 1.5;
	color:#898989;
	margin-bottom: 2.7rem;
	text-align:center;
	font-weight: lighter;

	${below.tablet`
		font-size:2.25rem;
	`};
`

const Container = styled.section`
    width: 100vw;
    position: relative;
    vertical-align: middle;
    text-align: center;
		overflow:hidden;
		display:table;
		${below.phone`
			max-height: 740px;
			padding:0;
		`};
		.Posterwrap {
			position:relative;
			width:100%;
			height:100%;

			${below.desktop`
				min-height:400px;
			`};
			${below.tablet`
				min-height:240px;
			`};
		}
		h2{
			max-width:867px;
			margin: auto;
		}
		.upTitle{
			padding-bottom:3.7rem;
		}
		.subTitle{
			margin-top:2rem;
		}
		p{
			max-width:54rem;
			margin:auto;
		}
		svg {
			width: 49.5rem;
			height: 14.9rem;
		}
		svg, svg * {
			fill: #ffffff;
		}
    .inner{
    	padding:150px 20px;
      position: relative;
		  top: 50%;
		  transform: translateY(-50%);
		  ${below.desktop`
		  	padding:50px 40px;
		  	top:0;
		  	transform:translateY(0);
				br {
					display:none;
				}
			`};

			${below.tablet`
		  	padding:50px 15px;
			`};
    }
`;

const Poster = styled.img`
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
	object-fit:cover;
`