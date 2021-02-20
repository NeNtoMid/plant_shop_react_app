import React from 'react';
import PropTypes from 'prop-types';

import {
	StyledHeader,
	StyledHeaderLogo,
	StyledNav,
	StyledInput,
	StyledLabel,
	StyledSidebarMenu,
	StyledSidebarMenuInner,
} from './MobileMenuStyle';

const MobileMenu = (props) => {
	return (
		<>
			<StyledHeader>
				<StyledHeaderLogo>Plantify</StyledHeaderLogo>
			</StyledHeader>
			<StyledNav>
				<StyledInput />
				<StyledLabel>
					<div className='spinner diagonal part-1'></div>
					<div className='spinner horizontal'></div>
					<div className='spinner diagonal part-2'></div>
				</StyledLabel>
				<StyledSidebarMenu>
					<StyledSidebarMenuInner>
						<li>
							<a href='/products'>Prodcuts</a>
						</li>
						<li>
							<a href='/fashion'>Fashion</a>
						</li>
						<li>
							<a href='/tools'>Tools</a>
						</li>
						<li>
							<a href='/books'>Books</a>
						</li>
						<li>
							<a href='/docs'>Fashion</a>
						</li>
						<li>
							<a href='/more'>More</a>
						</li>

						<li>
							<a href='/login'>Log in</a>
						</li>
						<li>
							<a href='/signup'>Sign up</a>
						</li>
					</StyledSidebarMenuInner>
				</StyledSidebarMenu>
			</StyledNav>
		</>
	);
};

MobileMenu.propTypes = {};

export default MobileMenu;
