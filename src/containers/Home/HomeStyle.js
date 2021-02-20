import styled from 'styled-components';

import PlantImg from './../../assets/images/Home/plant.png';

import { isMobile } from 'mobile-device-detect';

import breakpoints from '../../utils/breakpoints';

/* -------------------------------------------------------------------------- */
/*                                   Header                                   */
/* -------------------------------------------------------------------------- */

export const StyledHeader = styled.header`
	width: 80%;
	margin: 1.5% auto;
`;

export const StyledNav = styled.nav`
	display: flex;
	color: ${({ theme }) => theme.colors.lightGrey};
`;

export const StyledHeaderLogo = styled.h1`
	color: black;
	font-size: 2.5rem;
	font-style: italic;
	padding-top: 3rem;
`;

export const StyledHeaderList = styled.ul`
	list-style: none;
	display: flex;
	margin-left: 10rem;
	font-size: 1.3rem;
`;

export const StyledHeaderListElement = styled.li`
	margin-right: 3rem;
	padding-top: 4rem;
`;

export const StyledHeaderListElementLink = styled.a.attrs((props) => ({
	href: props.path,
}))`
	color: ${({ theme }) => theme.colors.lightGrey};

	position: relative;
	&:after {
		background: none repeat scroll 0 0 transparent;
		bottom: 0;
		content: '';
		display: block;
		height: 1px;
		left: 50%;
		position: absolute;
		background-color: ${({ theme }) => theme.colors.main};
		transition: width 0.3s ease 0s, left 0.3s ease 0s;
		width: 0;
	}
	&:hover:after {
		width: 100%;
		left: 0;
	}
`;

export const StyledButtonsContainer = styled.div`
	padding-top: 2rem;
	width: 100%;
	text-align: right;
	font-size: 1.3rem;
`;

export const StyledLinkPrimary = styled(StyledHeaderListElementLink)`
	display: inline-block;
	margin: 0 4.5rem;
`;

export const StyledLinkSecondaryDark = styled.a.attrs((props) => ({
	href: props.path,
}))`
	display: inline-block;
	background-color: ${({ theme }) => theme.colors.main};
	border: 1px solid ${({ theme }) => theme.colors.main};
	color: white;
	text-align: center;
	font-size: 1rem;
	width: 13em;
	padding-top: 2em;
	height: 6em;
	border-radius: 1.5em;

	transition: all 0.3s;

	&:hover {
		background-color: white;
		color: ${({ theme }) => theme.colors.main};
		border: 1px solid ${({ theme }) => theme.colors.main};
	}

	span {
		font-size: 1.3rem;
	}

	${({ theme }) => theme.between(breakpoints.laptop, '1125px')} {
		font-size: 0.8rem;
		padding-top: 1.8em;
	}
`;

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

export const StyledLinkSecondaryLight = styled.a.attrs((props) => ({
	href: props.path,
}))`
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

export const StyledLinkLightGreen = styled.a.attrs((props) => ({
	href: props.path,
}))`
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

export const StyledPlantImg = styled.div`
	width: 50%;
	height: auto;
	background-image: url(${PlantImg});

	background-position: bottom;
	background-repeat: no-repeat;
	background-size: contain;
	display: ${isMobile && 'none'};

	${({ theme }) => theme.between(breakpoints.tablet, breakpoints.laptop)} {
		display: block;
		padding-left: 34rem;
	}
`;
