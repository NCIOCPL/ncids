import PropTypes from 'prop-types';
import React from 'react';
import { Link, withPrefix } from 'gatsby';

export const BasicHeader = ({ children, siteLink, siteLogo, siteTitle }) => (
	<header className="usa-header usa-header--basic">
		<div className="usa-nav-container">
			<div className="usa-navbar">
				<div className="usa-logo" id="basic-logo">
					<em className="usa-logo__text">
						<Link to={siteLink} title={siteTitle} aria-label={siteTitle}>
							<img src={siteLogo} alt={siteTitle} width="325" height="31" />
						</Link>
					</em>
				</div>

				<button className="usa-menu-btn">Menu</button>
			</div>

			<nav aria-label="Primary navigation" className="usa-nav">
				<button className="usa-nav__close">
					<img src={withPrefix('close.svg')} alt="close" />
				</button>

				{children}

				<form className="usa-search usa-search--small" role="search">
					<label className="usa-sr-only" htmlFor="basic-search-field-en-small">
						Search
					</label>
					<input
						className="usa-input"
						id="basic-search-field-en-small"
						type="search"
						name="search"
					/>
					<button className="usa-button" type="submit">
						<span className="usa-sr-only">Search</span>
					</button>
				</form>
			</nav>
		</div>
	</header>
);

BasicHeader.propTypes = {
	children: PropTypes.node,
	siteLink: PropTypes.string,
	siteLogo: PropTypes.string,
	siteTitle: PropTypes.string,
};

BasicHeader.defaultProps = {
	siteTitle: ``,
};

export default BasicHeader;
