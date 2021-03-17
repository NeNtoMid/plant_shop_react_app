import produce from 'immer';

import {
	FETCH_CATEGORIES_DATA_SUCCEED,
	FETCH_CATEGORIES_DATA_FAIL,
} from './../actions/actionsType';

const initialState = {
	data: [],
	error: null,
};

const fetchCategoriesDataSucceed = (draft, data) => {
	draft.data = data.categories;
	draft.error = false;
};

const setError = (draft, data) => {
	draft.error = { msg: data.msg, code: data.code };
};
const categoriesReducer = (state = initialState, action) => {
	return produce(state, (draft) => {
		switch (action.type) {
			case FETCH_CATEGORIES_DATA_SUCCEED:
				fetchCategoriesDataSucceed(draft, action.payload);
				break;

			case FETCH_CATEGORIES_DATA_FAIL:
				setError(draft, action.payload);
				break;
			default:
				break;
		}
	});
};

export default categoriesReducer;
