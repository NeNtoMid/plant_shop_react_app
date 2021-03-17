import styled from 'styled-components';

import breakpoints from '../../utils/breakpoints';

import { isMobile } from 'mobile-device-detect';

import { Link } from 'react-router-dom';

/* -------------------------------------------------------------------------- */
/*                                    Main                                    */
/* -------------------------------------------------------------------------- */

export const StyledMain = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
`;

export const StyledHero = styled.article`
	width: 80%;
	margin: 0 auto;
	display: flex;
`;

export const StyledHeroWrapper = styled.div`
	width: 50%;
	${({ theme }) => theme.down(breakpoints.tablet)} {
		width: 100%;
	}
`;

export const StyledHeroTitle = styled.h2`
	font-size: 4.6rem;
	margin-top: 4rem;
	letter-spacing: 1px;

	${({ theme }) => theme.down(breakpoints.laptop)} {
		margin-top: 10.5rem;
		font-size: 3.8rem;
		width: 95%;
	}

	${({ theme }) => theme.down(breakpoints.tablet)} {
		margin-top: 10.5rem;
		font-size: 2.8rem;
		width: 95%;
	}
`;

export const StyledHeroDescription = styled.p`
	margin-top: 3rem;
	margin-bottom: 3rem;
	font-size: 1.6rem;
	font-weight: 200;
	color: ${({ theme }) => theme.colors.lightGrey};
	width: 38.2rem;
	text-align: justify;

	${({ theme }) => theme.down(breakpoints.tablet)} {
		font-size: 1.2rem;
		width: 96%;
		margin-bottom: 3.4rem;
	}

	${({ theme }) => theme.between('506px', breakpoints.tablet)} {
		font-size: 1.25rem;
		width: 55%;
		margin-bottom: 3.4rem;
	}

	${({ theme }) => theme.down(breakpoints.laptop)} {
		/* margin-bottom: 2.6rem; */
	}
`;

export const StyledLinkSecondaryLight = styled(Link)`
	background-color: ${({ theme }) =>
		!isMobile ? theme.colors.primary : theme.colors.main};
	border: 1px solid
		${({ theme }) => (!isMobile ? theme.colors.primary : theme.colors.main)};
	color: white;
	display: inline-block;
	width: 18em;
	height: 6em;

	text-align: center;
	padding: 1.5em;
	border-radius: 1.5em;
	margin-top: 2em;

	transition: all 0.4s;

	${({ theme }) => theme.down(breakpoints.laptop)} {
		font-size: 0.75rem;
	}

	${({ theme }) => theme.down(breakpoints.tablet)} {
		font-size: 0.65rem;
	}

	&:hover {
		color: ${({ theme }) => theme.colors.primary};
		border: 1px solid ${({ theme }) => theme.colors.primary};
		background-color: white;
	}
`;

export const StyledLinkLightGreen = styled(Link)`
	color: ${({ theme }) =>
		!isMobile ? theme.colors.primary : theme.colors.main};

	display: inline-block;
	width: 18em;
	height: 4.5em;

	text-align: center;
	padding: 1.5em;
	border-radius: 1.5em;
	margin-top: 2em;
	margin-left: 3em;

	span {
		font-size: 1.65em;

		i {
			font-size: 1.1875em;
		}
	}
	i {
		margin-right: 1rem;
	}

	position: relative;
	&:after {
		background: none repeat scroll 0 0 transparent;
		bottom: 0;
		content: '';
		display: block;
		height: 1px;
		left: 50%;
		position: absolute;
		background-color: ${({ theme }) => theme.colors.primary};
		transition: width 0.3s ease 0s, left 0.3s ease 0s;
		width: 0;
	}
	&:hover:after {
		width: 80%;

		left: 10%;
	}

	${({ theme }) => theme.down(breakpoints.laptop)} {
		font-size: 0.75rem;
	}

	${({ theme }) => theme.down(breakpoints.tablet)} {
		font-size: 0.65rem;
	}
`;
