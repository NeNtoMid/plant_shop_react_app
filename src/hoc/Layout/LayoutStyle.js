import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

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

export const StyledHeaderListElementLink = styled(NavLink)`
	color: ${({ theme }) => theme.colors.lightGrey};

	position: relative;
	&:after {
		background: none repeat scroll 0 0 transparent;
		bottom: 0;
		content: '';
		display: block;
		height: 1px;
		left: 0;

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

export const StyledLinkPrimary = styled(NavLink)`
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

	display: inline-block;
	margin: 0 4.5rem;
`;

export const StyledLinkSecondaryDark = styled(NavLink)`
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
