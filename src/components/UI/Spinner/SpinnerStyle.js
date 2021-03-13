import styled, { keyframes } from 'styled-components';

const ldsRing = keyframes`


    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  

`;

export const StyledSpinner = styled.div`
	display: inline-block;
	position: relative;
	font-size: ${({ size }) => (size ? size : '1.8em')};
	width: 8em;
	height: 8em;

	div {
		box-sizing: border-box;
		display: block;
		position: absolute;
		width: 6.4em;
		height: 6.4em;
		margin: 0.8em;
		border: 0.8em solid ${({ theme }) => theme.colors.main};
		border-radius: 50%;
		animation: ${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		border-color: ${({ theme }) => theme.colors.main} transparent transparent
			transparent;

		&:nth-child(1) {
			animation-delay: -0.45s;
		}
		&:nth-child(2) {
			animation-delay: -0.3s;
		}
		&:nth-child(3) {
			animation-delay: -0.15s;
		}
	}
`;
