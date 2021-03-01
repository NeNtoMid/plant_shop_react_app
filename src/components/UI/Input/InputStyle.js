import styled from 'styled-components';

export const StyledFormGroup = styled.div`
	position: relative;
	margin-bottom: 25px;
	overflow: hidden;

	&:last-child {
		margin-bottom: 0px;
	}

	input {
		border-bottom: ${({ error }) => error && '1px solid red'};

		&:focus {
			border-bottom: ${({ error }) => error && '1px solid red'};
		}
	}

	label {
		span {
			border: ${({ error }) => error && '1px solid red'};
		}
	}
`;

export const StyledErrorMessage = styled.span`
	color: red;
`;
