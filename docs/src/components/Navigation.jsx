import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Navigation = ({ data, page }) => {
	const [sideNav, setSideNav] = useState([]);
	let iter = 0;

	useEffect(() => {
		setSideNav(data);
	}, []);

	const links = sideNav.map((item) => {
		if (item.url === `${page.section}/index`) return;
		const keyName = `side-${item.section}-${item.section}-${iter}`;
		iter++;
		return (
			<li className="usa-sidenav__item" key={keyName}>
				<a
					href={`/${item.url.replace('index', '')}`}
					className={item.name === page.name ? 'usa-current' : ''}>
					{item.name}
				</a>
			</li>
		);
	});

	return (
		<div className="grid-col-3">
			<nav aria-label="Side navigation">
				<ul className="usa-sidenav usa-sidenav--nci-sidenav">{links}</ul>
			</nav>
		</div>
	);
};

Navigation.propTypes = {
	data: PropTypes.array,
	page: PropTypes.object,
};

export default Navigation;
