import styled from 'styled-components';

export const StyledContainer = styled.div`
	position: relative;
	height: 100vh;
`;

export const StyledWrapper = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	max-width: 52rem;
	width: 100%;
	line-height: 1.4;
	text-align: center;
	transform: translate(-50%, -50%);

	div {
		position: relative;
		height: 24rem;

		h1 {
			position: absolute;
			left: 50%;
			top: 50%;

			transform: translate(-50%, -50%);
			font-size: 25.2rem;
			font-weight: 900;
			margin: 0;
			color: #262626;
			text-transform: uppercase;
			letter-spacing: -4rem;
			margin-left: -2rem;
		}

		h1 > span {
			text-shadow: -0.8rem 0 0 #fff;
		}

		h3 {
			position: relative;
			font-size: 1.6rem;
			font-weight: 700;
			text-transform: uppercase;
			color: #262626;
			margin: 0;
			letter-spacing: 0.3rem;
			padding-left: 0.6rem;
		}
	}

	h2 {
		font-size: 2rem;
		font-weight: 400;
		text-transform: uppercase;
		color: #000;
		margin-top: 0px;
		margin-bottom: 2.5rem;
	}

	@media only screen and (max-width: 767px) {
		div {
			height: 20rem;
		}
		div h1 {
			font-size: 20rem;
		}
	}

	@media only screen and (max-width: 480px) {
		div {
			height: 16.2rem;
		}
		div h1 {
			font-size: 16.2rem;
			height: 15rem;
			line-height: 16.2rem;
		}
		h2 {
			font-size: 1.6rem;
		}
	}
`;
