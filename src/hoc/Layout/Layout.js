import React from 'react';

import { isMobile } from 'mobile-device-detect';

import { useSelector } from 'react-redux';

import MobileMenu from './../../components/UI/MobileMenu/MobileMenu';

import { Link, useLocation } from 'react-router-dom';

import {
	StyledHeader,
	StyledNav,
	StyledHeaderLogo,
	StyledHeaderList,
	StyledHeaderListElement,
	StyledHeaderListElementLink,
	StyledButtonsContainer,
	StyledLinkSecondaryDark,
	StyledLinkPrimary,
} from './LayoutStyle';

const Layout = ({ children }) => {
	const isAuth = useSelector((state) => state.user.isAuth);
	let menu = <MobileMenu isAuth={isAuth} />;

	if (!isMobile) {
		menu = (
			<>
				<StyledHeader>
					<StyledNav>
						<StyledHeaderLogo>
							<Link to='/'>Plantify</Link>
						</StyledHeaderLogo>

						<StyledHeaderList>
							<StyledHeaderListElement>
								<StyledHeaderListElementLink
									activeClassName='highlightLink'
									to='/products'
								>
									Products
								</StyledHeaderListElementLink>
							</StyledHeaderListElement>
							<StyledHeaderListElement>
								<StyledHeaderListElementLink to='/categories'>
									Categories
								</StyledHeaderListElementLink>
							</StyledHeaderListElement>
							<StyledHeaderListElement>
								<StyledHeaderListElementLink to='/tools'>
									Tools
								</StyledHeaderListElementLink>
							</StyledHeaderListElement>
							<StyledHeaderListElement>
								<StyledHeaderListElementLink to='/books'>
									Books
								</StyledHeaderListElementLink>
							</StyledHeaderListElement>
							<StyledHeaderListElement>
								<StyledHeaderListElementLink to='/docs'>
									Docs
								</StyledHeaderListElementLink>
							</StyledHeaderListElement>
							<StyledHeaderListElement>
								<StyledHeaderListElementLink to='/more'>
									More
								</StyledHeaderListElementLink>
							</StyledHeaderListElement>
						</StyledHeaderList>
						<StyledButtonsContainer>
							{isAuth ? (
								<StyledLinkSecondaryDark to='/logout'>
									<span>Log out</span>
								</StyledLinkSecondaryDark>
							) : (
								<>
									<StyledLinkPrimary to='/login'>Log in</StyledLinkPrimary>
									<StyledLinkSecondaryDark to='/signup'>
										<span>Sign up</span>
									</StyledLinkSecondaryDark>
								</>
							)}
						</StyledButtonsContainer>
					</StyledNav>
				</StyledHeader>
			</>
		);
	}

	const { pathname } = useLocation();

	if (pathname === '/login' || pathname === '/signup') {
		menu = null;
	}

	return (
		<>
			{menu} {children}
		</>
	);
};

export default Layout;
