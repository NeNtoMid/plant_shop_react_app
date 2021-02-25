import React from 'react';
import PropTypes from 'prop-types';

import useValidation from '../../hooks/Validation/useValidation';

import ValidationForm from './../../components/ValidationForm/ValidationForm';

const Validation = (props) => {
	const { handleGoToPreviousPage } = useValidation();
	return (
		<>
			<ValidationForm signup={props.signup} goBack={handleGoToPreviousPage} />
		</>
	);
};

Validation.propTypes = {
	signup: PropTypes.bool.isRequired,
};

export default Validation;
