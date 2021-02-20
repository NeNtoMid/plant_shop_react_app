import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from './theme/normalize';

import theme from './theme/theme';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './containers/Home/Home';
const App = () => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
				</Switch>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;
