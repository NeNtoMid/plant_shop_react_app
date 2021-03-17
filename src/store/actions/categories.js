import axios from './../../axios-config';

import {
	FETCH_CATEGORIES_DATA_SUCCEED,
	FETCH_CATEGORIES_DATA_FAIL,
} from './actionsType';

export const fetchCategoriesData = () => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get('/categories');
			dispatch({
				type: FETCH_CATEGORIES_DATA_SUCCEED,
				payload: {
					categories: data,
				},
			});
		} catch (err) {
			console.log(err.response.data);

			dispatch({
				type: FETCH_CATEGORIES_DATA_FAIL,
				payload: {
					msg: err.response.data,
					code: err.response.status,
				},
			});
		}
	};
};
