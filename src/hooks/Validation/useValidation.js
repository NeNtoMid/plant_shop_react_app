import { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';

const useValidation = () => {
	const history = useHistory();

	const handleGoToPreviousPage = () => {
		history.goBack();
	};
	const { register, handleSubmit, errors, setError } = useForm();

	const handleDataSubmission = (data) => {
		console.log('data:', data);

		if (data.re_pass && data.pass.toString() !== data.re_pass.toString()) {
			setError('re_pass', {
				type: 'manual',
				message: 'Passwords are not the same',
			});
		}
	};

	return {
		register,
		errors,
		handleSubmit,
		handleGoToPreviousPage,
		handleDataSubmission,
	};
};

export default useValidation;
