import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import { isMobile, isMobileOnly } from 'mobile-device-detect';

import MobileMenu from './../../components/UI/MobileMenu/MobileMenu';

import ModalVideo from 'react-modal-video';

import './../../../node_modules/react-modal-video/css/modal-video.min.css';

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
							<StyledLinkPrimary to='/login'>Log in</StyledLinkPrimary>
							<StyledLinkSecondaryDark to='/signup'>
								<span>Sign up</span>
							</StyledLinkSecondaryDark>
						</StyledButtonsContainer>
					</StyledNav>
				</StyledHeader>
			</>
		);
	}

	const [isDisplay, setDisplay] = useState(false);
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
						<StyledLinkLightGreen path='#' onClick={() => setDisplay(true)}>
							<span>
								<i className='far fa-play-circle'></i>
							</span>
							<span> Watch video</span>
						</StyledLinkLightGreen>
					</StyledHeroWrapper>

					{!isMobileOnly && <StyledPlantImg />}
				</StyledHero>
				<ModalVideo
					channel='youtube'
					isOpen={isDisplay}
					videoId='w77zPAtVTuI'
					onClose={() => setDisplay(false)}
				/>{' '}
			</StyledMain>

			{isMobileOnly && (
				<StyledPlantImg
					style={{ width: '80%', height: '18rem', paddingTop: '23rem' }}
				/>
			)}
		</>
	);
};

Home.propTypes = {};

export default Home;
