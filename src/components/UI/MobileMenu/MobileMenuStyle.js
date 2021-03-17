import styled from 'styled-components';

import breakpoints from './../../../utils/breakpoints';
/* -------------------------------------------------------------------------- */
/*                                   Header                                   */
/* -------------------------------------------------------------------------- */

export const StyledHeader = styled.header`
	display: block;
	margin: 0 auto;
	width: 100%;
	max-width: 100%;
	box-shadow: none;
	background-color: ${({ theme }) => theme.colors.primary};
	position: fixed;
	height: 6rem !important;
	overflow: hidden;
	z-index: 10;
`;

export const StyledNav = styled.nav`
	.sidebarIconToggle {
		transition: all 0.3s;
		box-sizing: border-box;
		cursor: pointer;
		position: fixed;
		z-index: 99;
		height: 100%;
		width: 100%;
		top: 2.2rem;
		right: 1.5rem;
		height: 2.2rem;
		width: 2.2rem;
	}

	.spinner {
		transition: all 0.3s;
		box-sizing: border-box;
		position: absolute;
		height: 0.3rem;
		width: 100%;
		background-color: #fff;
	}
	.horizontal {
		transition: all 0.3s;
		box-sizing: border-box;
		position: relative;
		float: left;
		margin-top: 3px;
	}
	.diagonal.part-1 {
		position: relative;
		transition: all 0.3s;
		box-sizing: border-box;
		float: left;
	}
	.diagonal.part-2 {
		transition: all 0.3s;
		box-sizing: border-box;
		position: relative;
		float: left;
		margin-top: 3px;
	}

	input[type='checkbox']:checked ~ #sidebarMenu {
		transform: translateX(0);
	}

	input[type='checkbox'] {
		transition: all 0.3s;
		box-sizing: border-box;
		display: none;
	}

	input[type='checkbox']:checked ~ .sidebarIconToggle > .horizontal {
		transition: all 0.3s;
		box-sizing: border-box;
		opacity: 0;
	}
	input[type='checkbox']:checked ~ .sidebarIconToggle > .diagonal.part-1 {
		transition: all 0.3s;
		box-sizing: border-box;
		transform: rotate(135deg);
		margin-top: 0.8rem;
	}
	input[type='checkbox']:checked ~ .sidebarIconToggle > .diagonal.part-2 {
		transition: all 0.3s;
		box-sizing: border-box;
		transform: rotate(-135deg);
		margin-top: -0.9rem;
	}
`;

export const StyledInput = styled.input.attrs((props) => ({
	type: 'checkbox',
	className: 'openSidebarMenu',
	id: 'openSidebarMenu',
}))``;

export const StyledLabel = styled.label.attrs((props) => ({
	htmlFor: 'openSidebarMenu',
	className: 'sidebarIconToggle',
}))``;

export const StyledSidebarMenu = styled.div.attrs(() => ({
	id: 'sidebarMenu',
}))`
	height: 100%;
	position: fixed;
	right: 0;
	width: 25rem;
	margin-top: 6rem;
	transform: translateX(25rem);
	transition: transform 250ms ease-in-out;
	background: linear-gradient(180deg, #96bf47 0%, #96bf47 100%);
	z-index: 100;
`;

export const StyledSidebarMenuInner = styled.ul`
	margin: 0;
	padding: 0;
	border-top: 1px solid rgba(255, 255, 255, 0.1);

	li {
		list-style: none;
		color: #fff;
		text-transform: uppercase;
		font-weight: bold;
		padding: 2rem;
		cursor: pointer;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);

		&:last-child {
			background-color: ${({ theme }) => theme.colors.main};
		}

		&:nth-child(7) {
			background-color: ${({ theme }) => theme.colors.main};
		}
		a {
			color: #fff;
			text-transform: uppercase;
			font-weight: bold;
			cursor: pointer;
			text-decoration: none;
			display: block;
			width: 100%;
		}
	}

	${({ theme }) => theme.down(breakpoints.laptop)} {
		li {
			padding: 1.73rem;
		}
	}

	${({ theme }) => theme.between('769px', breakpoints.laptop)} {
		li {
			padding: 2.12rem;
		}
	}
`;

export const StyledHeaderLogo = styled.h1`
	color: white;
	font-size: 2.5rem;
	font-style: italic;
	padding-top: 1rem;
	margin-left: 2rem;
	display: inline-block;
`;
