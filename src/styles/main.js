import { css, injectGlobal } from 'styled-components'
import { reset } from './reset'
import { Grid } from './Grid'
import { FlexGrid } from './Flex-Grid';
import { below, above } from './functions'
import * as vars from "./vars"
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


injectGlobal`
	${reset}
	${Grid}
	${FlexGrid}
	${styles}

	/* These three fonts are Neutraface2Text but we are naming them as neutra text tf for compatibility reasons */
	@font-face {
	  font-family: 'Neutra Text TF';
	  src: url('/fonts/Neutraface2Text-Book.woff2') format('woff2'),
	      url('/fonts/Neutraface2Text-Book.woff') format('woff');
	  font-weight: normal;
	  font-style: normal;
	}

	@font-face {
	  font-family: 'Neutra Text TF';
	  src: url('/fonts/Neutraface2Text-Bold.woff2') format('woff2'),
	      url('/fonts/Neutraface2Text-Bold.woff') format('woff');
	  font-weight: 700;
	  font-style: normal;
	}

	@font-face {
    font-family: 'Neutra Text TF';
    src: url('/fonts/Neutraface2Text-Light.woff2') format('woff2'),
        url('/fonts/Neutraface2Text-Light.woff') format('woff');
    font-weight: 100;
    font-style: normal;
	}


	/*@font-face {
		font-family: 'Neutra Text TF';
		src: url('/fonts/NeutraTextTF-BookItalic.eot');
		src: url('/fonts/NeutraTextTF-BookItalic.eot?#iefix') format('embedded-opentype'), url('/fonts/NeutraTextTF-BookItalic.woff') format('woff'), url('/fonts/NeutraTextTF-BookItalic.ttf') format('truetype');
		font-weight: 500;
		font-style: italic;
	}
	
	@font-face {
		font-family: 'Neutra Text TF';
		src: url('/fonts/NeutraTextTF-Bold.eot');
		src: url('/fonts/NeutraTextTF-Bold.eot?#iefix') format('embedded-opentype'), url('/fonts/NeutraTextTF-Bold.woff') format('woff'), url('/fonts/NeutraTextTF-Bold.ttf') format('truetype');
		font-weight: bold;
		font-style: normal;
	}
	
	@font-face {
		font-family: 'Neutra Text TF';
		src: url('/fonts/NeutraTextTF-Light.eot');
		src: url('/fonts/NeutraTextTF-Light.eot?#iefix') format('embedded-opentype'), url('/fonts/NeutraTextTF-Light.woff') format('woff'), url('/fonts/NeutraTextTF-Light.ttf') format('truetype');
		font-weight: 100;
		font-style: normal;
	}
	
	@font-face {
		font-family: 'Neutra Text TF';
		src: url('/fonts/NeutraTextTF-Book.eot');
		src: url('/fonts/NeutraTextTF-Book.eot?#iefix') format('embedded-opentype'), url('/fonts/NeutraTextTF-Book.woff') format('woff'), url('/fonts/NeutraTextTF-Book.ttf') format('truetype');
		font-weight: 500;
		font-style: normal;
	}
	
	@font-face {
		font-family: 'Neutra Text TF';
		src: url('/fonts/NeutraTextTF-Demi.eot');
		src: url('/fonts/NeutraTextTF-Demi.eot?#iefix') format('embedded-opentype'), url('/fonts/NeutraTextTF-Demi.woff') format('woff'), url('/fonts/NeutraTextTF-Demi.ttf') format('truetype');
		font-weight: 500;
		font-style: normal;
	}
	
	@font-face {
		font-family: 'Neutra Text TF';
		src: url('/fonts/NeutraTextTF-LightItalic.eot');
		src: url('/fonts/NeutraTextTF-LightItalic.eot?#iefix') format('embedded-opentype'), url('/fonts/NeutraTextTF-LightItalic.woff') format('woff'), url('/fonts/NeutraTextTF-LightItalic.ttf') format('truetype');
		font-weight: 100;
		font-style: italic;
	}*/
	
	/*

		html, body{
			max-width:1300px;
			margin:auto;
			font-weight:normal;
		}
		html{
			background-image: url('/images/bg.png');
			background-size: 1300px 3690px;
			background-repeat:no-repeat;
		}
		body{
			opacity:0.6;
		}
	*/

	/* Carousel modifications */
	.carousel.carousel-slider .control-arrow {
		top:calc(50% - 40px)!important;
		right:0;
		width:60px;
		height:80px;
		padding:5px 0!important;
		background-color:#FFF!important;
		opacity:1;

		&:before {
			position:relative;
			top:-3px;
			width:100%;
			height:calc(100% - 10px);
			border:none;
			margin:0;
			opacity:0.65;
			border-right:none!important;
			border-left:none!important;
			background-image:url('/images/chevron-thin-right.svg');
			background-size:100% 100%;
			background-position:center center;
			background-repeat:no-repeat;
		}

		&:hover {
			background-color:#fff!important;

			&:before {
				opacity:1;
			}
		}

		&.control-prev {
			right:auto;
			left:0;
			&:before {
				border-left:none!important;
				border-right:none!important;
				background-image:url('/images/chevron-thin-left.svg');
			}
		}

		${below.tablet`
			top:calc(50% - 30px)!important;
			height:60px;
			width:30px;
		`};
	}
	.carousel .control-dots .dot {
		box-shadow:none!important;
	}

	.gatsby-image-wrapper {
		background-color: ${vars.colors.bg};
	}
	.gatsby-image-wrapper img:first-of-type{
		display: none;
	}
	body {
		font-family: 'Neutra Text TF', san-serif;
		color: ${vars.colors.bodyText};
	}
	html, body{
		font-size:10px;
		${above.giant`
			font-size:11px;
		`};
		${above.xl`
			font-size:13px;
		`};
		${below.phone`
			font-size:9px;
		`};
	}
	
	* {
		box-sizing: border-box;
	}
	
	
	img,
	svg {
		max-width: 100%;
	}
	
	.wrapper {
		position:relative;
		padding:0;
		width: 100%;
		margin: auto;
		max-width: 1300px;
	}
	
	.wrapper.sml {
		max-width: 966px;
	}
	
	.wrapper.padd {
		padding-left: ${vars.generalsidePadd};
		padding-right: ${vars.generalsidePadd};
	}

	.wrapper.padd-left {
		padding-left:0;
		padding-right: ${vars.generalsidePadd};
	}
	
	.txtWrap {
		padding: 13.7rem 0;
		text-align: center;
		p{
			margin-bottom: 2.9rem;
			&:last-of-type{
				margin-bottom:0;
			}
		}
		h4{
			margin-bottom:2.8rem;

		}
		${below.tablet`
			padding: 9.7rem 0;
		`};
	}
	
	.txtWrap.thin {
		padding: 6.5rem 0;
		color: #000000;
	}
	
	.grey.txtWrap {
		background-color: #F1F1F1;
	}

	.border-top {
		padding-top:40px;
		padding-bottom:40px;
		border-top:#000 solid 1px;

		${below.desktop`
			padding:40px 15px;
		`};
	}
	
	.mob-hidden {
		${below.tablet`
			display: none;
		`};
	}`