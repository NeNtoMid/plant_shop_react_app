import React, { useEffect, useRef } from 'react';

import { Link, useHistory } from 'react-router-dom';

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
	const history = useHistory();

	const inputRef = useRef(null);

	useEffect(() => {
		return history.listen((location) => {
			inputRef.current.checked = false;
		});
	}, [history]);

	return (
		<>
			<StyledHeader>
				<Link to='/'>
					<StyledHeaderLogo>Plantify</StyledHeaderLogo>
				</Link>
			</StyledHeader>
			<StyledNav>
				<StyledInput ref={inputRef} />
				<StyledLabel>
					<div className='spinner diagonal part-1'></div>
					<div className='spinner horizontal'></div>
					<div className='spinner diagonal part-2'></div>
				</StyledLabel>
				<StyledSidebarMenu>
					<StyledSidebarMenuInner>
						<li>
							<Link to='/products'>Prodcuts</Link>
						</li>
						<li>
							<Link to='/categories'> Categories</Link>
						</li>
						<li>
							<Link to='/tools'>Tools</Link>
						</li>
						<li>
							<Link to='/books'>Books</Link>
						</li>
						<li>
							<Link to='/docs'>Fashion</Link>
						</li>
						<li>
							<Link to='/more'>More</Link>
						</li>
						{!props.isAuth ? (
							<>
								<li>
									<Link to='/login'>Log in</Link>
								</li>
								<li>
									<Link to='/signup'>Sign up</Link>
								</li>
							</>
						) : (
							<li>
								<Link to='/logout'>Log out</Link>
							</li>
						)}
					</StyledSidebarMenuInner>
				</StyledSidebarMenu>
			</StyledNav>
		</>
	);
};

MobileMenu.propTypes = {};

export default MobileMenu;
