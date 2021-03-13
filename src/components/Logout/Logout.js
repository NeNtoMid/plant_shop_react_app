import React, { useEffect } from 'react';

import { Redirect } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { logoutUser } from './../../store/actions/index';

const Logout = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			dispatch(logoutUser());
		};
	}, [dispatch]);
	return <Redirect to='/' />;
};

export default Logout;
