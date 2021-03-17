import React, { Suspense, lazy, useEffect } from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from './theme/normalize';

import theme from './theme/theme';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import PrivateRoute from './hoc/PrivateRoute/PrivateRoute';

import { useSelector, useDispatch } from 'react-redux';

import { checkUserAuthentication } from './store/actions/index';

import Spinner from './components/UI/Spinner/Spinner';

import Layout from './hoc/Layout/Layout';

const Home = lazy(() => import('./containers/Home/Home'));

const Authentication = lazy(() =>
	import('./containers/Authentication/Authentication')
);

const Logout = lazy(() => import('./components/Logout/Logout'));

const ErrorPage = lazy(() => import('./components/ErrorPage/ErrorPage'));

const Categories = lazy(() => import('./components/Categories/Categories'));

const App = () => {
	const isAuth = useSelector((state) => state.user.isAuth);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserAuthentication());
	}, [dispatch]);

	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Layout>
					<Switch>
						<Route exact path='/'>
							<Suspense fallback={<Spinner />}>
								<Home />
							</Suspense>
						</Route>

						<Route exact path='/signup'>
							<Suspense fallback={<Spinner />}>
								{!isAuth ? <Authentication signup /> : <Redirect to='/' />}
							</Suspense>
						</Route>

						<Route exact path='/login'>
							<Suspense fallback={<Spinner />}>
								{!isAuth ? (
									<Authentication signup={false} />
								) : (
									<Redirect to='/' />
								)}
							</Suspense>
						</Route>

						<PrivateRoute exact path='/logout'>
							<Logout />
						</PrivateRoute>

						<Route exact path='/categories'>
							<Suspense fallback={<Spinner />}>
								<Categories />
							</Suspense>
						</Route>
						<Route path='/'>
							<Suspense fallback={<Spinner />}>
								<ErrorPage />
							</Suspense>
						</Route>
					</Switch>
				</Layout>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;
