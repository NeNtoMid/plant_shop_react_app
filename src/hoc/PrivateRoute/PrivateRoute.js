import React, { Suspense } from 'react';

import { useSelector } from 'react-redux';

import { Route, Redirect } from 'react-router-dom';

import Spinner from './../../components/UI/Spinner/Spinner';

const PrivateRoute = ({ children, ...rest }) => {
	const isAuth = useSelector((state) => state.user.isAuth);

	return (
		<Route
			{...rest}
			render={({ location }) =>
				isAuth ? (
					<Suspense fallback={<Spinner />}>{children}</Suspense>
				) : (
					<Redirect exact to='/login' />
				)
			}
		/>
	);
};

export default PrivateRoute;
