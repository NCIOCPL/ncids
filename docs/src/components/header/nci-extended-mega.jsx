import PropTypes from 'prop-types';
import React from 'react';
import { Link, withPrefix } from 'gatsby';

import { Button } from '@nciocpl/ncids-react';

export const NCIExtendedHeader = ({
	children,
	siteLink,
	siteLogo,
	siteTitle,
}) => (
	<header className="usa-header usa-header--extended usa-header--nci-extended">
		<div className="usa-navbar flex-justify">
			<div className="flex-fill usa-logo margin-2" id="extended-mega-logo">
				<em className="usa-logo__text">
					<Link to={siteLink} title={siteTitle} aria-label={siteTitle}>
						<img src={siteLogo} alt={siteTitle} width="325" height="31" />
					</Link>
				</em>
			</div>

			<div className="flex-fill display-flex flex-align-center flex-justify-start desktop:flex-justify-end width-full">
				<Button className="usa-button usa-menu-btn margin-x-2" label="Menu" />

				<form
					className="usa-search usa-search--small maxw-mobile width-full margin-right-2 desktop:margin-right-0"
					role="search">
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

		<nav aria-label="Primary navigation" className="usa-nav">
			<div className="usa-nav__inner">
				<button className="usa-nav__close">
					<img src={withPrefix('close.svg')} alt="close" />
				</button>

				{children}
			</div>
		</nav>
	</header>
);

NCIExtendedHeader.propTypes = {
	children: PropTypes.node,
	siteLink: PropTypes.string,
	siteLogo: PropTypes.string,
	siteTitle: PropTypes.string,
};

NCIExtendedHeader.defaultProps = {
	siteTitle: ``,
};

export default NCIExtendedHeader;
