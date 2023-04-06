import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const SideNavigation = ({ data, path }) => {
	const [sideNav, setSideNav] = useState([]);

	useEffect(() => {
		setSideNav([data]);
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

	const buildSideNav = (data, level = 0) => {
		const links = data.map((item) => {
			if (item.children.length > 0) {
				const isMatch = path.includes(item.name) ? 'nci-current' : '';
				const isRoot = level == 0 ? '' : 'nci-has-children';
				level++;

				const subList = buildSideNav(item.children, level);
				const keyName = `node-${item.name}-${level}`;
				return (
					<li className="usa-sidenav__item" key={keyName}>
						<Link to={item.path} className={`${isMatch} ${isRoot}`}>
							{item.label}
						</Link>
						{Boolean(isMatch) && (
							<ul className="usa-sidenav__sublist">{subList}</ul>
						)}
					</li>
				);
			} else {
				if (item.isRoot) return false;
				return makeLink(item);
			}
		});
		return links;
	};

	return (
		<div className="grid-col-3">
			<nav aria-label="Side navigation">
				<ul className="usa-sidenav usa-sidenav--nci-sidenav">
					{buildSideNav(sideNav)}
				</ul>
			</nav>
		</div>
	);
};

SideNavigation.propTypes = {
	data: PropTypes.object,
	path: PropTypes.array,
};

export default SideNavigation;
