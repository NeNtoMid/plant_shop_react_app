const theme = {
	colors: {
		main: '#004C3F',
		primary: '#96BF47',
		primaryLight: '#D5E5B5',
		lightGrey: '#5d5c5c',
	},

	up: (breakpoint, vertical = false) =>
		`@media (min-${
			vertical ? 'height' : 'width'
		}: calc(${breakpoint} + 0.02px))`,
	down: (breakpoint, vertical = false) =>
		`@media (max-${vertical ? 'height' : 'width'}: ${breakpoint})`,
	between: (breakpointMin, breakpointMax, vertical = false) =>
		`@media (max-${vertical ? 'height' : 'width'}: ${breakpointMax}) and (min-${
			vertical ? 'height' : 'width'
		}: calc(${breakpointMin} + 0.02px))`,
};

export default theme;


//#759538