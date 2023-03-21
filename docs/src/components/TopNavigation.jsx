import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const TopNavigation = ({ data, page }) => {
	const [topNav, setTopNav] = useState([]);

	useEffect(() => {
		data.map((item, index) => {
			if (item.section === 'home') {
				var a = data.splice(index, 1);
				data.unshift(a[0]);
			}
		});
		setTopNav(data);
	}, []);

	const links = topNav.map((item) => {
		const keyName = `top-${item.title}`;
		const classList = `nci-header-nav__primary-link ${
			page.section === item.section ? 'usa-current' : null
		}`;
		return (
			<li className="nci-header-nav__primary-item" key={keyName}>
				<Link to={`/${item.url}`} className={classList}>
					{item.name}
				</Link>
			</li>
		);
	});

	return (
		<nav aria-label="Primary navigation" className="nci-header-nav">
			<div className="nci-header-nav__inner">
				<ul className="nci-header-nav__primary">{links}</ul>
			</div>
		</nav>
	);
};

TopNavigation.propTypes = {
	data: PropTypes.array,
	page: PropTypes.object,
};

export default TopNavigation;
