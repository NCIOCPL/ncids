import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ children, siteTitle }) => (
	<header className="usa-header usa-header--extended">
		<div className="usa-navbar">
			<div className="usa-logo" id="extended-logo">
				<em className="usa-logo__text">
					<Link to="/" title="Home" aria-label="Home">
						{siteTitle}
					</Link>
				</em>
			</div>
			<button className="usa-menu-btn">Menu</button>
		</div>
		{children}
	</header>
);

Header.propTypes = {
	children: PropTypes.node,
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
