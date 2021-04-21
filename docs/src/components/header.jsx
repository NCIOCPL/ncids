import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Button } from '@nciocpl/ncids-react';

import NciLogo from '../images/nci-logo-white.png';

const Header = ({ children, siteTitle }) => (
	<header className="usa-header usa-header--extended">
		<div className="usa-navbar">
			<div className="usa-logo" id="extended-logo">
				<Link to="/" title="Home" aria-label="Home">
					<img src={NciLogo} alt={siteTitle} className="nci-logo" />
				</Link>
			</div>

							
			<Button classes="usa-button--secondary download-button" label="download" />
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
