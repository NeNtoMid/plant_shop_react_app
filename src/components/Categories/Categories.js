import React from 'react';
// import PropTypes from 'prop-types';

import useCategories from './../../hooks/Categories/useCategories';

import ErrorPage from '../ErrorPage/ErrorPage';

import urlSlug from 'url-slug';

import {
	StyledMain,
	StyledHero,
	StyledHeroTitle,
	StyledHeroDescription,
	StyledHeroWrapper,
} from './CategoriesStyle';

import { StyledHeaderListElementLink } from './../../hoc/Layout/LayoutStyle';

const Categories = (props) => {
	const { categoriesData, categoriesError } = useCategories();

	let categories = (
		<StyledMain>
			<StyledHero>
				<StyledHeroWrapper>
					<StyledHeroTitle>Categories</StyledHeroTitle>

					{categoriesData.map((cat) => (
						<StyledHeroDescription key={cat.id}>
							<StyledHeaderListElementLink to={`/${urlSlug(cat.Name)}`}>
								<span style={{ fontSize: '1.35em' }}>{cat.Name}</span>
							</StyledHeaderListElementLink>
						</StyledHeroDescription>
					))}
				</StyledHeroWrapper>
			</StyledHero>
		</StyledMain>
	);

	if (categoriesError) {
		categories = <ErrorPage codeError={categoriesError.code} />;
	}

	return categories;
};

export default Categories;
