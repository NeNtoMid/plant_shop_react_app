import { createGlobalStyle, css } from 'styled-components';

import breakpoints from './../utils/breakpoints';

export default createGlobalStyle(
	({ theme }) => css`
		*,
		*::before,
		*::after {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		html {
			font-size: 62.5%;
		}

		body {
			font-family: 'Poppins', sans-serif;
			width: 100%;
			height: 100%;
		}

		a {
			text-decoration: none;
			color: black;
		}

		${theme.between(breakpoints.tablet, '1080px')} {
			html {
				font-size: 56.5%;
			}
		}

		${theme.down(breakpoints.mobileM)} {
			html {
				font-size: 62.5%;
			}
		}
	`
);

// ${up(breakpoints.xs)} {
//     // styles
//   }
