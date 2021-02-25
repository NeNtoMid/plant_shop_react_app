import { useState } from 'react';

import { useHistory } from 'react-router-dom';

const useValidation = () => {
	const history = useHistory();

	const handleGoToPreviousPage = () => {
		history.goBack();
	};
	return { handleGoToPreviousPage };
};

export default useValidation;
