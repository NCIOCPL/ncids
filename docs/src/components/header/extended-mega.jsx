import PropTypes from 'prop-types';
import React from 'react';
import { Link, withPrefix } from 'gatsby';

export const ExtendedMegaHeader = ({
	children,
	siteLink,
	siteLogo,
	siteTitle,
}) => (
	<header className="usa-header usa-header--extended">
		<div className="usa-navbar">
			<div className="usa-logo" id="extended-mega-logo">
				<em className="usa-logo__text">
					<Link to={siteLink} title={siteTitle} aria-label={siteTitle}>
						<img src={siteLogo} alt={siteTitle} width="325" height="31" />
					</Link>
				</em>
			</div>

			<button className="usa-menu-btn">Menu</button>
		</div>

		<nav aria-label="Primary navigation" className="usa-nav">
			<div className="usa-nav__inner">
				<button className="usa-nav__close">
					<img src={withPrefix('close.svg')} alt="close" />
				</button>

				{children}

				<div className="usa-nav__secondary">
					<ul className="usa-nav__secondary-links">
						<li className="usa-nav__secondary-item">
							<Link to="">Secondary link</Link>
						</li>

						<li className="usa-nav__secondary-item">
							<Link to="">Another secondary link</Link>
						</li>
					</ul>

					<form className="usa-search usa-search--small" role="search">
						<label
							className="usa-sr-only"
							htmlFor="extended-mega-search-field-en-small">
							Search
						</label>
						<input
							className="usa-input"
							id="extended-mega-search-field-en-small"
							type="search"
							name="search"
						/>
						<button className="usa-button" type="submit">
							<span className="usa-sr-only">Search</span>
						</button>
					</form>
				</div>
			</div>
		</nav>
	</header>
);

ExtendedMegaHeader.propTypes = {
	children: PropTypes.node,
	siteLink: PropTypes.string,
	siteLogo: PropTypes.string,
	siteTitle: PropTypes.string,
};

ExtendedMegaHeader.defaultProps = {
	siteTitle: ``,
};

export default ExtendedMegaHeader;
