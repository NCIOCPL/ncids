import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const MobileNavigation = ({ data, path }) => {
	const [mobileNav, setMobileNav] = useState([]);

	useEffect(() => {
		setMobileNav([data]);
	}, [data]);

	const makeLink = (item) => {
		const isMatch = path.includes(item.name);
		const keyName = `link-${item.name}`;
		return (
			<li className="usa-sidenav__item" key={keyName}>
				<Link
					to={item.path.replace('.mdx', '')}
					className={isMatch ? 'usa-current' : ''}>
					{item.label}
				</Link>
			</li>
		);
	};

	const buildMobileNav = (data, level = 0) => {
		const links = data.map((item) => {
			if (item.children.length > 0) {
				const isMatch = path.includes(item.name) ? 'usa-current' : '';
				level++;

				const subList = buildMobileNav(item.children, level);
				const keyName = `node-${item.name}-${level}`;
				return (
					<li className="usa-sidenav__item" key={keyName}>
						<Link to={item.path.replace(/\/+$/, '')} className={`${isMatch}`}>
							{item.label}
						</Link>
						<ul className="usa-sidenav__sublist">{subList}</ul>
					</li>
				);
			} else {
				return makeLink(item);
			}
		});
		return links;
	};

	return (
		<div className="grid-col-12">
			<nav aria-label="Mobile navigation">
				<ul
					className="usa-sidenav usa-sidenav--nci-sidenav"
					style={{ display: 'block' }}>
					{buildMobileNav(mobileNav)}
				</ul>
			</nav>
		</div>
	);
};

MobileNavigation.propTypes = {
	data: PropTypes.object,
	path: PropTypes.array,
};

export default MobileNavigation;
