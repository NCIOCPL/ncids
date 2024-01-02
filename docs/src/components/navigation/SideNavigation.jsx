import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

// Determine if 2 arrays are equal
// Used for checking if link paths are the same
// If paths are the same, add usa-current style
const arrayEquality = (a, b) =>
	a.length == b.length &&
	a.every(function (ele, ind) {
		return ele === b[ind];
	});

const SideNavigation = ({ data, path }) => {
	const makeLink = (item) => {
		const linkItemPath = item.path.split('/').filter((e) => e);
		const isMatch = arrayEquality(linkItemPath, path);
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
				const isMatch = path.includes(item.name) ? 'usa-current' : '';
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
				return makeLink(item);
			}
		});
		return links;
	};

	return (
		<div className="grid-col-3">
			<nav aria-label="Side navigation">
				<ul className="usa-sidenav">{data && buildSideNav([data])}</ul>
			</nav>
		</div>
	);
};

SideNavigation.propTypes = {
	data: PropTypes.object,
	path: PropTypes.array,
};

export default SideNavigation;
