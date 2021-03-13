import React from 'react';
import PropTypes from 'prop-types';

import useAuthentication from '../../hooks/Authentication/useAuthentication';

import ValidationForm from '../../components/ValidationForm/ValidationForm';

const Authentication = (props) => {
	const {
		register,
		errors,
		loading,
		handleSubmit,
		handleGoToPreviousPage,
		handleDataSubmission,
	} = useAuthentication();

	return (
		<>
			<ValidationForm
				signup={props.signup}
				register={register}
				errors={errors}
				loading={loading}
				submit={handleSubmit}
				dataSubmission={handleDataSubmission}
				goBack={handleGoToPreviousPage}
			/>
		</>
	);
};

Authentication.propTypes = {
	signup: PropTypes.bool.isRequired,
};

export default Authentication;
