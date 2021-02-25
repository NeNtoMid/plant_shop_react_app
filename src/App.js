import React, { Suspense, lazy } from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from './theme/normalize';

import theme from './theme/theme';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Spinner from './components/UI/Spinner/Spinner';

const Home = lazy(() => import('./containers/Home/Home'));

const Validation = lazy(() => import('./containers/Validation/Validation'));
const App = () => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Switch>
					<Route exact path='/'>
						<Suspense fallback={<Spinner />}>
							<Home />
						</Suspense>
					</Route>

					<Route exact path='/signup'>
						<Suspense fallback={<Spinner />}>
							<Validation signup />
						</Suspense>
					</Route>

					<Route exact path='/login'>
						<Suspense fallback={<Spinner />}>
							<Validation signup={false} />
						</Suspense>
					</Route>
				</Switch>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;
