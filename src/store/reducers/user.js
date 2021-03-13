import produce from 'immer';

import {
	REGISTER_USER_FAIL,
	REGISTER_USER_SUCCEED,
	LOGIN_USER_SUCCEED,
	LOGIN_USER_FAIL,
	LOGOUT_USER,
	AUTH_USER_SUCCEED,
	AUTH_USER_FAIL,
} from './../actions/actionsType';

const initialState = {
	isAuth: false,
	error: false,
	userId: null,
	tokenId: null,
};

const registerUserSucceed = (draft, data) => {
	draft.isAuth = true;
	draft.error = false;
	draft.userId = data.userId;
	draft.tokenId = data.tokenId;
};

const loginUserSucced = (draft, data) => {
	draft.isAuth = true;
	draft.error = false;
	draft.userId = data.userId;
	draft.tokenId = data.tokenId;
};

const logoutUser = (draft) => {
	draft.isAuth = false;
	draft.error = false;
	draft.userId = null;
	draft.tokenId = null;
};
const setError = (draft, data) => {
	draft.error = data.msg;
};

const clearError = (draft) => {
	draft.error = false;
};

const authenticateUserSucceed = (draft, data) => {
	draft.isAuth = true;
	draft.error = false;
	draft.userId = data.userId;
	draft.tokenId = data.tokenId;
};

const userReducer = (state = initialState, action) => {
	return produce(state, (draft) => {
		switch (action.type) {
			case REGISTER_USER_SUCCEED:
				registerUserSucceed(draft, action.payload);
				break;

			case REGISTER_USER_FAIL:
				setError(draft, action.payload);
				break;

			case LOGIN_USER_SUCCEED:
				loginUserSucced(draft, action.payload);
				break;

			case LOGIN_USER_FAIL:
				setError(draft, action.payload);
				break;

			case LOGOUT_USER:
				logoutUser(draft);
				break;

			case AUTH_USER_SUCCEED:
				authenticateUserSucceed(draft, action.payload);
				break;

			default:
				break;
		}
	});
};

export default userReducer;
