import React from 'react';
import PropTypes from 'prop-types';

import useValidation from '../../hooks/Validation/useValidation';

import ValidationForm from './../../components/ValidationForm/ValidationForm';

const Validation = (props) => {
	const {
		register,
		errors,
		handleSubmit,
		handleGoToPreviousPage,
		handleDataSubmission,
	} = useValidation();

	return (
		<>
			<ValidationForm
				signup={props.signup}
				register={register}
				errors={errors}
				submit={handleSubmit}
				dataSubmission={handleDataSubmission}
				goBack={handleGoToPreviousPage}
			/>
		</>
	);
};

Validation.propTypes = {
	signup: PropTypes.bool.isRequired,
};

export default Validation;
