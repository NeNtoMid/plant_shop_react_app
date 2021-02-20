import React from 'react';
// import PropTypes from 'prop-types';

import { isMobile } from 'mobile-device-detect';

import MobileMenu from './../../components/UI/MobileMenu/MobileMenu';

import {
	StyledHeader,
	StyledNav,
	StyledMain,
	StyledHeaderLogo,
	StyledHeaderList,
	StyledHeaderListElement,
	StyledButtonsContainer,
	StyledLinkPrimary,
	StyledLinkSecondaryDark,
	StyledHero,
	StyledHeroTitle,
	StyledHeroDescription,
	StyledLinkSecondaryLight,
	StyledLinkLightGreen,
	StyledHeaderListElementLink,
	StyledPlantImg,
	StyledHeroWrapper,
} from './HomeStyle';
const Home = (props) => {
	let menu = <MobileMenu />;

	if (!isMobile) {
		menu = (
			<>
				<StyledHeader>
					<StyledNav>
						<StyledHeaderLogo>Plantify</StyledHeaderLogo>

						<StyledHeaderList>
							<StyledHeaderListElement>
								<StyledHeaderListElementLink path='/products'>
									Products
								</StyledHeaderListElementLink>
							</StyledHeaderListElement>
							<StyledHeaderListElement>
								<StyledHeaderListElementLink path='/fashion'>
									Fashion
								</StyledHeaderListElementLink>
							</StyledHeaderListElement>
							<StyledHeaderListElement>
								<StyledHeaderListElementLink path='/tools'>
									Tools
								</StyledHeaderListElementLink>
							</StyledHeaderListElement>
							<StyledHeaderListElement>
								<StyledHeaderListElementLink path='/books'>
									Books
								</StyledHeaderListElementLink>
							</StyledHeaderListElement>
							<StyledHeaderListElement>
								<StyledHeaderListElementLink path='/docs'>
									Docs
								</StyledHeaderListElementLink>
							</StyledHeaderListElement>
							<StyledHeaderListElement>
								<StyledHeaderListElementLink path='/more'>
									More
								</StyledHeaderListElementLink>
							</StyledHeaderListElement>
						</StyledHeaderList>
						<StyledButtonsContainer>
							<StyledLinkPrimary path='/login'>Log in</StyledLinkPrimary>
							<StyledLinkSecondaryDark path='/signup'>
								<span>Sign up</span>
							</StyledLinkSecondaryDark>
						</StyledButtonsContainer>
					</StyledNav>
				</StyledHeader>
			</>
		);
	}
	return (
		<>
			{menu}

			<StyledMain>
				<StyledHero>
					<StyledHeroWrapper>
						<StyledHeroTitle>
							Make your home brilliant <br /> with us!
						</StyledHeroTitle>
						<StyledHeroDescription>
							We are one of the most popular plant shop in Poland. Every our
							customer has a variety of options You can buy almoast each type of
							flower at very low price.
						</StyledHeroDescription>

						<StyledLinkSecondaryLight path='/pricing'>
							<span style={{ fontSize: '1.7em' }}>Buy now</span>
						</StyledLinkSecondaryLight>
						<StyledLinkLightGreen path='/video'>
							<span>
								<i className='far fa-play-circle'></i>
							</span>
							<span> Watch video</span>
						</StyledLinkLightGreen>
					</StyledHeroWrapper>

					<StyledPlantImg />
				</StyledHero>
			</StyledMain>
		</>
	);
};

Home.propTypes = {};

export default Home;
