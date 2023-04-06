import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import logo from '../images/logo_NCI.svg';
import logoMobile from '../images/logo_NCI_mobile.svg';

const Header = ({ children }) => (
	<header className="nci-header nci-header--extended" data-testid="nci-header">
		<div className="nci-header__navbar">
			<div className="nci-logo">
				<Link to="/" aria-label="Homepage">
					<picture>
						<source media="(min-width: 1024px)" srcSet={logo} />
						<img src={logoMobile} alt="" />
					</picture>
				</Link>
			</div>
		</div>

		<nav aria-label="Primary navigation" className="nci-header-nav">
			<div className="nci-header-nav__inner">{children}</div>
		</nav>
	</header>
);

Header.propTypes = {
	children: PropTypes.node,
};

export default Header;
