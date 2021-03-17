import React from 'react';
import PropTypes from 'prop-types';

import { StyledContainer, StyledWrapper } from './ErrorPageStyle';

const errorPage = (props) => {
	const codeError = props.codeError || 404;
	return (
		<StyledContainer>
			<StyledWrapper>
				<div>
					<h3>Oops! Page not found</h3>
					<h1>
						{`${codeError}`.split('').map((num, index) => (
							<span key={index}>{num}</span>
						))}
					</h1>
				</div>
				<h2>
					{codeError === 404
						? 'we are sorry, but the page you requested was not found'
						: 'we are sorry, but we have some problem. Please come back later!'}
				</h2>
			</StyledWrapper>
		</StyledContainer>
	);
};

errorPage.propTypes = {
	codeError: PropTypes.number,
};

export default errorPage;
