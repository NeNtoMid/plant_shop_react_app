import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchCategoriesData } from './../../store/actions/index';

const useCategories = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCategoriesData());
	}, [dispatch]);

	const categoriesData = useSelector((state) => state.categories.data);

	const categoriesError = useSelector((state) => state.categories.error);

	return { categoriesData , categoriesError };
};

export default useCategories;
