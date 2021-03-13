import {
	REGISTER_USER_SUCCEED,
	REGISTER_USER_FAIL,
	LOGOUT_USER,
	LOGIN_USER_SUCCEED,
	LOGIN_USER_FAIL,
	AUTH_USER_SUCCEED,
} from './actionsType';

import axios from './../../axios-config';

export const setJWTExpirationTimeout = (time = 3600) => {
	return async (dispatch) => {
		setTimeout(() => {
			dispatch(logoutUser());
		}, time * 1000);
	};
};

export const logoutUser = () => {
	localStorage.removeItem('tokenId');
	localStorage.removeItem('tokenExpirationDate');
	localStorage.removeItem('userId');

	return {
		type: LOGOUT_USER,
	};
};

export const registerUser = (registerData) => {
	return async (dispatch) => {
		try {
			const request = await axios.post('/auth/local/register', registerData);

			localStorage.setItem('email', registerData.email);
			localStorage.setItem('tokenId', request.data.jwt);
			localStorage.setItem('userId', request.data.user.id);
			localStorage.setItem(
				'tokenExpirationDate',
				new Date(new Date().getTime() + 3600 * 1000)
			);
			dispatch({
				type: REGISTER_USER_SUCCEED,
				payload: {
					userId: request.data.user.id,
					tokenId: request.data.jwt,
				},
			});
			dispatch(setJWTExpirationTimeout());
		} catch (err) {
			console.log(err.response.data.message[0].messages[0].message);

			dispatch({
				type: REGISTER_USER_FAIL,
				payload: {
					msg: err.response.data.message[0].messages[0].message,
				},
			});
		} finally {
			return;
		}
	};
};

export const loginUser = (loginData) => {
	return async (dispatch) => {
		try {
			const request = await axios.post('/auth/local', loginData);

			localStorage.setItem('email', loginData.identifier);
			localStorage.setItem('tokenId', request.data.jwt);
			localStorage.setItem('userId', request.data.user.id);
			localStorage.setItem(
				'tokenExpirationDate',
				new Date(new Date().getTime() + 3600 * 1000)
			);

			dispatch({
				type: LOGIN_USER_SUCCEED,
				payload: {
					userId: request.data.user.id,
					tokenId: request.data.jwt,
				},
			});

			dispatch(setJWTExpirationTimeout());
		} catch (err) {
			dispatch({
				type: LOGIN_USER_FAIL,
				payload: {
					msg: err.response.data.message[0].messages[0].message,
				},
			});
			return err;
		}
	};
};

export const checkUserAuthentication = () => {
	return async (dispatch) => {
		const leftExpirationTime = new Date(
			localStorage.getItem('tokenExpirationDate')
		);

		const tokenId = localStorage.getItem('tokenId');

		const presentTime = new Date(new Date().getTime());

		const tokenExpiresIn = leftExpirationTime - presentTime;

		if (!leftExpirationTime || !tokenId || tokenExpiresIn < 0) {
			return dispatch(logoutUser());
		}

		const userId = localStorage.getItem('userId');

		dispatch({
			type: AUTH_USER_SUCCEED,
			payload: {
				userId,
				tokenId,
			},
		});

		dispatch(setJWTExpirationTimeout(tokenExpiresIn / 1000));
	};
};
