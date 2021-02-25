import React from 'react';
import PropTypes from 'prop-types';

import { StyledSpinner } from './SpinnerStyle';

const Spinner = (props) => {
	return (
		<>
			<StyledSpinner>
				<div></div>
				<div></div>
				<div></div>
			</StyledSpinner>
		</>
	);
};

Spinner.propTypes = {};

export default Spinner;
