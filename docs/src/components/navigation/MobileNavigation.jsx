import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const MobileNavigation = ({ data, path, open }) => {
	const [mobileNav, setMobileNav] = useState({});

	useEffect(() => {
		setUpNavigation(data);
	}, [data, open]);

	const setUpNavigation = (menuData) => {
		// Puts navigation data in same object structure
		// For finding the current location of the mobile nav
		const mainMenu = {
			name: 'main-menu',
			label: 'Main Menu',
			path: '/',
			children: menuData,
		};
		const currentLocation = findNavLocation(mainMenu) || mainMenu;
		const previousLocation =
			findPreviousLocation(mainMenu, currentLocation) || mainMenu;
		// If current nav location has children, set explore link and children to this nav location
		// (Else) If the current nav location has no children, set the navigation to the previous level
		if (currentLocation.children.length > 0) {
			setMobileNav({
				navData: mainMenu,
				previous: previousLocation,
				explore: currentLocation,
				children: currentLocation.children,
			});
		} else {
			setMobileNav({
				navData: mainMenu,
				previous: findPreviousLocation(mainMenu, previousLocation),
				explore: previousLocation,
				children: previousLocation.children,
			});
		}
	};

	const findNavLocation = (navParent) => {
		let navigation;
		for (let i = 0; i < navParent?.children?.length && !navigation; i++) {
			// If nav item's name matches last path string,
			// this nav item is the current nav item (for Explore link)
			if (navParent.children[i].name === path[path.length - 1]) {
				navigation = navParent.children[i];
				break;
			} else if (navParent.children[i].children.length > 0) {
				navigation = findNavLocation(navParent.children[i]);
			}
		}
		return navigation;
	};

	const findPreviousLocation = (menu, current) => {
		let navigation;
		for (let i = 0; i < menu?.children?.length && !navigation; i++) {
			// If nav item's name doesn't match the last path string,
			// find the previous nav level (for Back link)
			if (menu.children[i].name !== current.name) {
				navigation = findPreviousLocation(menu.children[i], current);
			} else {
				navigation = menu;
				break;
			}
		}
		return navigation;
	};

	const handleMenuInteract = (item) => {
		const previousNavItem = findPreviousLocation(mobileNav.navData, item);
		setMobileNav({
			...mobileNav,
			previous: previousNavItem,
			explore: item,
			children: item.children,
		});
	};

	const buildMobileNavList = (navChildren) => {
		if (navChildren?.length > 0) {
			const links = navChildren.map((item) => {
				// If the nav item has children
				const isMatch = path.includes(item.name) ? 'current' : '';
				let keyName = `node-${item.name}`;
				if (item?.children?.length > 0) {
					return (
						<li
							className="nci-header-mobilenav__list-node nci-has-children"
							key={keyName}>
							<button
								onClick={() => handleMenuInteract(item)}
								className={`nci-header-mobilenav__list-label ${isMatch}`}>
								{item.label}
							</button>
						</li>
					);
				} else {
					keyName = `link-${item.name}`;
					return (
						<li className="nci-header-mobilenav__list-item" key={keyName}>
							{
								<Link
									className={`nci-header-mobilenav__list-link  ${isMatch}`}
									to={item.path.replace(/\/+$/, '')}>
									{item.label}
								</Link>
							}
						</li>
					);
				}
			});
			return links;
		}
	};

	const addExploreLink = (explore) => {
		if (explore && explore?.name !== 'main-menu') {
			const isCurrent = path[path.length - 1] === explore.name ? 'current' : '';
			return (
				<li className="nci-header-mobilenav__list-item">
					<Link
						to={explore.path}
						className={`nci-header-mobilenav__list-link ${isCurrent}`}>
						{`Explore ${explore.label}`}
					</Link>
				</li>
			);
		}
	};

	const addBackLink = (previous) => {
		if (previous && mobileNav?.explore?.name !== 'main-menu') {
			const backLabel = previous?.name === 'main-menu' ? 'Main Menu' : 'Back';
			return (
				<li className="nci-header-mobilenav__list-node active">
					<button
						onClick={() => handleMenuInteract(previous)}
						className="nci-header-mobilenav__list-msg">
						{backLabel}
					</button>
				</li>
			);
		}
	};

	return (
		<nav className="nci-header-mobilenav__nav" aria-label="Mobile navigation">
			<ul className="nci-header-mobilenav__list">
				{addBackLink(mobileNav.previous)}
				<li className="nci-header-mobilenav__list-holder">
					<ul className="nci-header-mobilenav__list">
						{addExploreLink(mobileNav.explore)}
						{buildMobileNavList(mobileNav.children)}
					</ul>
				</li>
			</ul>
		</nav>
	);
};

MobileNavigation.propTypes = {
	data: PropTypes.array,
	path: PropTypes.array,
	open: PropTypes.bool,
};

export default MobileNavigation;
