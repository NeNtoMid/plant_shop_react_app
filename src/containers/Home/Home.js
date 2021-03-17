import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import { isMobileOnly } from 'mobile-device-detect';

import ModalVideo from 'react-modal-video';

import './../../../node_modules/react-modal-video/css/modal-video.min.css';

import { Link } from 'react-router-dom';

import {
	StyledMain,
	StyledHero,
	StyledHeroTitle,
	StyledHeroDescription,
	StyledLinkSecondaryLight,
	StyledLinkLightGreen,
	StyledPlantImg,
	StyledHeroWrapper,
} from './HomeStyle';
const Home = (props) => {
	const [isDisplay, setDisplay] = useState(false);
	return (
		<>
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

						<StyledLinkSecondaryLight to='/pricing'>
							<span style={{ fontSize: '1.7em' }}>Buy now</span>
						</StyledLinkSecondaryLight>

						<StyledLinkLightGreen onClick={() => setDisplay(true)}>
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
