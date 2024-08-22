import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link, withPrefix } from 'gatsby';
import TopNavigation from './navigation/TopNavigation';
import MobileNavigation from './navigation/MobileNavigation';

import logo from '../images/logo_NCI.svg';
import logoMobile from '../images/logo_NCI_mobile.svg';

const Header = ({ navData, currentPath }) => {
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
						onClick={() => setMobileOverlay(true)}
						className="usa-button nci-header-mobilenav__open-btn">
						Menu
					</button>
					<form
						id="search"
						method={'get'}
						action={withPrefix('/search')}
						className="nci-header-search"
						role="search">
						<label className="usa-sr-only" htmlFor="nci-header-search__field">
							Search
						</label>
						<input
							className="usa-input"
							id="nci-header-search__field"
							type="search"
							name="swKeyword"
						/>
						<button
							className="usa-button nci-header-search__search-button"
							type="submit"
							aria-label="search">
							<span className="nci-header-search__label" aria-hidden="true">
								Search
							</span>
							<svg
								className="usa-icon"
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								aria-labelledby="search-icon-title">
								<title id="search-icon-title">Search</title>
								<path d="M0 0h24v24H0z" fill="none" />
								<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
							</svg>
						</button>
					</form>
				</div>
			</div>
			<nav aria-label="Primary navigation" className="nci-header-nav">
				<div className="nci-header-nav__inner">
					{navData && <TopNavigation data={navData} path={currentPath} />}
				</div>
			</nav>
			<div className={`nci-header-mobilenav ${mobileOverlay ? 'active' : ''}`}>
				<button
					onClick={() => setMobileOverlay(false)}
					className="nci-header-mobilenav__close-btn"
					aria-controls="nci-header-mobilenav"
					aria-label="Close Menu"></button>
				{navData && (
					<MobileNavigation
						data={navData}
						path={currentPath}
						open={mobileOverlay}
					/>
				)}
			</div>
			<div
				role="presentation"
				data-testid="mobile-nav-overlay"
				className={`nci-header-mobilenav__overlay ${
					mobileOverlay ? 'active' : ''
				}`}
				onClick={() => setMobileOverlay(false)}
			/>
		</header>
	);
};

Header.propTypes = {
	navData: PropTypes.array,
	currentPath: PropTypes.array,
};

export default Header;
