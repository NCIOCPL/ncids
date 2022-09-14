import PropTypes from 'prop-types';
import React from 'react';

import logo from '../images/nci-logo-full.svg';

// language=HTML
const NciSearch = `
<div class="nci-header-nav__secondary">
<button class="usa-button nci-header-mobilenav__open-btn">Menu</button>

<form class="nci-header-search" role="search">
	<label class="usa-sr-only" for="extended-mega-search-field-en-small">
		Search
	</label>
	<input
		class="usa-input"
		id="nci-header-search__field"
		type="search"
		name="search"
	/>

	<button
		class="usa-button nci-header-search__search-button"
		type="submit"
    aria-label="search"
	>
		<span class="nci-header-search__label" aria-hidden="true">Search</span>
		<svg class="usa-icon" xmlns="http://www.w3.org/2000/svg"  role="img"  viewBox="0 0 24 24" aria-labelledby="search-icon-title">
			<title id="search-icon-title">Search</title>
			<path d="M0 0h24v24H0z" fill="none"/>
			<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
		</svg>
	</button>
</form>
</div>`;

const Header = ({ children }) => (
	<header className="nci-header nci-header--extended">
		<div className="nci-header__navbar">
			<div className="nci-logo">
				<a href="http://cancer.gov" aria-label="Homepage">
					<img src={logo} alt="" />
				</a>
			</div>
			<div dangerouslySetInnerHTML={{ __html: NciSearch }} />
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
