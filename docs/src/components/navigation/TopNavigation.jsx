import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const TopNavigation = ({ data, path }) => {
	const links = data?.map((item) => {
		const linkPath = item.path === '/' ? '/home' : item.path;
		const myPath = path[0] ? path[0] : 'home';
		const isMatch = myPath === linkPath.replace(/\//g, '');
		const classList = `nci-header-nav__primary-link ${
			isMatch ? 'usa-current' : null
		}`;
		return (
			<li className="nci-header-nav__primary-item" key={`topnav-${item.label}`}>
				<Link to={item.path} className={classList}>
					{item.label}
				</Link>
			</li>
		);
	});

	return <ul className="nci-header-nav__primary">{links}</ul>;
};

TopNavigation.propTypes = {
	data: PropTypes.array,
	path: PropTypes.array,
};

export default TopNavigation;
