import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import ReduxThunk from 'redux-thunk';

import userReducer from './store/reducers/user';

import categoriesReducer from './store/reducers/categories';

const rootReducer = combineReducers({
	user: userReducer,
	categories: categoriesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(ReduxThunk))
);
