import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'gatsby';
import TopNavigation from './navigation/TopNavigation';
import MobileNavigation from './navigation/MobileNavigation';

import logo from '../images/logo_NCI.svg';
import logoMobile from '../images/logo_NCI_mobile.svg';

const Header = ({ navData, currentPath }) => {
	const [mobileOverlay, setMobileOverlay] = useState(false);
	const mobileNavData = {
		name: 'Home',
		label: 'Home',
		path: '/',
		children: navData,
	};

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
				<div className="nci-header-nav__inner">
					{navData && <TopNavigation data={navData} path={currentPath} />}
				</div>
			</nav>
			<div className={`nci-header-mobilenav ${mobileOverlay ? 'active' : ''}`}>
				<button
					onClick={() => {
						setMobileOverlay(false);
					}}
					className="nci-header-mobilenav__close-btn"
					aria-controls="nci-header-mobilenav"
					aria-label="Close Menu"></button>
				{navData && (
					<MobileNavigation data={mobileNavData} path={currentPath} />
				)}
			</div>
			<div
				className={`nci-header-mobilenav__overlay ${
					mobileOverlay ? 'active' : ''
				}`}
			/>
		</header>
	);
};

Header.propTypes = {
	navData: PropTypes.object,
	currentPath: PropTypes.array,
};

export default Header;
