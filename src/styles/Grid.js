import { css, injectGlobal } from 'styled-components'
import * as vars from "./vars"
import { below } from "../styles/functions";

export const Grid = css`
	.Grid {
		${vars.Cf};
	}
	.Grid.grey {
		background: ${vars.colors.bg};
	}
	.Grid-col {
		clear:none;
		float:left;
	}
	.pull-right{
		float: right;
	}
	.Grid-col.padd {
		padding-left: ${vars.generalsidePadd};
		padding-right: ${vars.generalsidePadd};
		padding-top: ${vars.generalTopPadd};
		padding-bottom: ${vars.generalTopPadd};
	}
	.Grid-col.padd-t-b {
		padding-top: ${vars.generalTopPadd};
		padding-bottom: ${vars.generalTopPadd};
		${below.tablet`
			padding-top: 0;
			padding-left: ${vars.generalsidePadd};
			padding-right: ${vars.generalsidePadd};
		`};
	}
	.Grid-col.padd-r-l {
		padding-left: ${vars.generalsidePadd};
		padding-right: ${vars.generalsidePadd};
		${below.tablet`
			padding-right: 0;
			padding-left: 0;
		`};
	}
	.Grid-col.padd-r {
		padding-right: 2%;
		${below.tablet`
			padding-right: 0;
		`};
	}	
	.Grid-col.padd-l {
		padding-left: 2%;
		${below.tablet`
			padding-left: 0;
		`};
	}
	.Grid-col.col-01{
		width:10%
	}
	.Grid-col.col-02{
		width:20%
	}
	.Grid-col.col-03{
		width:30%
	}
	.Grid-col.col-04{
		width:40%
	}
	.Grid-col.col-05{
		width:50%
	}
	.Grid-col.col-06{
		width:60%
	}
	.Grid-col.col-07{
		width:70%
	}
	.Grid-col.col-08{
		width:80%
	}
	.Grid-col.col-09{
		width:90%
	}
	.Grid-col.col-10{
		width:100%
	}
	.Grid-col.stacked{
		${below.tablet`
			width:100%;
			float:none;
		`};
	}
	.Grid-col.break {
		&:after {
			content:'';
			display:block;
			clear:both;
		}
	}
`;
