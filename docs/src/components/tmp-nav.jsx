import { Link } from 'gatsby';
import React from 'react';

const TmpNav = () => (
	<ul className="nci-header-nav__primary">
		<li className="nci-header-nav__primary-item">
			<Link to="/" className="nci-header-nav__primary-link">
				Home
			</Link>
		</li>
		<li className="nci-header-nav__primary-item">
			<Link to="/" className="nci-header-nav__primary-link">
				Components
			</Link>
		</li>
		<li className="nci-header-nav__primary-item">
			<Link to="/" className="nci-header-nav__primary-link">
				Design Tokens
			</Link>
		</li>
		<li className="nci-header-nav__primary-item">
			<Link to="/" className="nci-header-nav__primary-link">
				Design Principles
			</Link>
		</li>
		<li className="nci-header-nav__primary-item">
			<Link to="/" className="nci-header-nav__primary-link">
				Templates
			</Link>
		</li>
		<li className="nci-header-nav__primary-item">
			<Link to="/" className="nci-header-nav__primary-link">
				About NCIDS
			</Link>
		</li>
	</ul>
);

export default TmpNav;
