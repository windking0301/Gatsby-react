import { css, injectGlobal } from 'styled-components'
import * as vars from "./vars"
import { below } from "../styles/functions";

export const FlexGrid = css`
	.Flex-Grid {
		display:flex;
		flex-wrap:wrap;

		&--reverse {
			flex-direction:row-reverse;
		}

		${below.desktop`
			flex-direction:column;
		`};
	}
	.Flex-Grid-col {
		flex-basis:0;
		flex-grow:1;
		max-width:100%;

		&.full {
			min-width:100%;
		}
	}
`;
