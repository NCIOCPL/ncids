//import { Link } from 'gatsby';
import React from 'react';
//import { withPrefix } from 'gatsby';

const TmpNav = () => (
	<ul className="nci-header--nci-nav__primary usa-accordion">
		<li className="nci-header--nci-nav__primary-item_">
			<a
				href="/"
				className="nci-primary__button"
				aria-expanded="false"
				aria-controls="extended-mega-nav-section-one">
				<span>Home</span>
			</a>
		</li>
		<li className="nci-header--nci-nav__primary-item">
			<a
				href="/components"
				className="nci-primary__button"
				aria-expanded="false"
				aria-controls="extended-mega-nav-section-two">
				<span>Components</span>
			</a>
		</li>
		<li className="nci-header--nci-nav__primary-item">
			<a
				href="/"
				className="nci-primary__button"
				aria-expanded="false"
				aria-controls="extended-mega-nav-section-two">
				<span>Design Tokens</span>
			</a>
		</li>
		<li className="nci-header--nci-nav__primary-item">
			<a
				href="/"
				className="nci-primary__button"
				aria-expanded="false"
				aria-controls="extended-mega-nav-section-two">
				<span>Design Principals</span>
			</a>
		</li>
		<li className="nci-header--nci-nav__primary-item">
			<a
				href="/"
				className="nci-primary__button"
				aria-expanded="false"
				aria-controls="extended-mega-nav-section-two">
				<span>Templates</span>
			</a>
		</li>
		<li className="nci-header--nci-nav__primary-item">
			<a
				href="/"
				className="nci-primary__button"
				aria-expanded="false"
				aria-controls="extended-mega-nav-section-two">
				<span>About NCIDS</span>
			</a>
		</li>
	</ul>
);

export default TmpNav;
