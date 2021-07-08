import PropTypes from 'prop-types';
import React from 'react';

import BasicHeader from './basic';
import BasicMegaHeader from './basic-mega';
import ExtendedHeader from './extended';
import ExtendedMegaHeader from './extended-mega';
import NCIExtendedHeader from './nci-extended-mega';

export const Header = ({
	children,
	siteLink,
	siteLogo,
	siteTitle,
	variant,
}) => (
	<>
		{variant === 'basic' && (
			<BasicHeader
				siteLink={siteLink}
				siteLogo={siteLogo}
				siteTitle={siteTitle}>
				{children}
			</BasicHeader>
		)}
		{variant === 'basic-mega' && (
			<BasicMegaHeader
				siteLink={siteLink}
				siteLogo={siteLogo}
				siteTitle={siteTitle}>
				{children}
			</BasicMegaHeader>
		)}
		{variant === 'extended' && (
			<ExtendedHeader
				siteLink={siteLink}
				siteLogo={siteLogo}
				siteTitle={siteTitle}>
				{children}
			</ExtendedHeader>
		)}
		{variant === 'extended-mega' && (
			<ExtendedMegaHeader
				siteLink={siteLink}
				siteLogo={siteLogo}
				siteTitle={siteTitle}>
				{children}
			</ExtendedMegaHeader>
		)}
		{variant === 'nci-extended-mega' && (
			<NCIExtendedHeader
				siteLink={siteLink}
				siteLogo={siteLogo}
				siteTitle={siteTitle}>
				{children}
			</NCIExtendedHeader>
		)}
	</>
);

Header.propTypes = {
	children: PropTypes.node,
	siteLink: PropTypes.string,
	siteLogo: PropTypes.string,
	siteTitle: PropTypes.string,
	variant: PropTypes.oneOf([
		'basic',
		'basic-mega',
		'extended',
		'extended-mega',
		'nci-extended-mega',
	]),
};

Header.defaultProps = {
	siteTitle: ``,
	variant: 'basic',
};

export default Header;
