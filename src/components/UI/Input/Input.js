import React from 'react';
import PropTypes from 'prop-types';

import { StyledFormGroup, StyledErrorMessage } from './InputStyle';

const Input = ({
	className,
	iconClasses,
	validation,
	validationRef,
	error,
	...rest
}) => {
	const errMsg = error ? error.message : null;
	return (
		<>
			<StyledFormGroup error={errMsg}>
				<StyledErrorMessage>{errMsg}</StyledErrorMessage>
				<label htmlFor={rest.id}>
					<i className={iconClasses}></i>
				</label>
				<input {...rest} ref={validationRef} />
			</StyledFormGroup>
		</>
	);
};

Input.propTypes = {};

export default Input;
