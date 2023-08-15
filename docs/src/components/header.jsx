import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'gatsby';

import logo from '../images/logo_NCI.svg';
import logoMobile from '../images/logo_NCI_mobile.svg';

const Header = ({ mobileNav, children }) => {
	const [mobileOverlay, setMobileOverlay] = useState(false);
	return (
		<header
			className="nci-header nci-header--extended"
			data-testid="nci-header">
			<div className="nci-header__navbar">
				<div className="nci-logo">
					<Link to="/" aria-label="Homepage">
						<picture>
							<source media="(min-width: 1024px)" srcSet={logo} />
							<img src={logoMobile} alt="" />
						</picture>
					</Link>
				</div>
				<div className="nci-header-nav__secondary">
					<button
						onClick={() => {
							setMobileOverlay(true);
						}}
						className="usa-button nci-header-mobilenav__open-btn">
						Menu
					</button>
				</div>
			</div>
			<nav aria-label="Primary navigation" className="nci-header-nav">
				<div className="nci-header-nav__inner">{children}</div>
			</nav>
			{mobileOverlay && (
				<>
					<div className="nci-header-mobilenav active">
						<button
							onClick={() => {
								setMobileOverlay(false);
							}}
							className="nci-header-mobilenav__close-btn"
							aria-controls="nci-header-mobilenav"
							aria-label="Close Menu"></button>
						<div>{mobileNav}</div>
					</div>
					<div className="nci-header-mobilenav__overlay active" />
				</>
			)}
		</header>
	);
};

Header.propTypes = {
	mobileNav: PropTypes.node,
	children: PropTypes.node,
};

export default Header;
