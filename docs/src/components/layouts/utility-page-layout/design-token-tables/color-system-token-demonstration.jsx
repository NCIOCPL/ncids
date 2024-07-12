import React from 'react';
import PropType from 'prop-types';

/**
 * @typedef ColorSystemTokenDemonstrationClass
 * @param {string} token_name The token name.
 * @param {string} hex_value The hex color of this token.
 * @param {string} token_family The color family for this token.
 * @param {string} token_grade The grade (darkness/lightness) of this token.
 * @param {string} token_variant The variant name for this token. (Basically is it vivid or not)
 */

/**
 * Helper to draw a row for the token.
 * @param {ColorSystemTokenDemonstrationClass} designToken The design token.
 * @returns
 */
const drawDetailedRow = (designToken) => {
	// Merge example classes.
	const classNames = ['font-mono-xs', 'bg-base-lightest'].join(' ');
	return (
		<div
			key={designToken.class_name}
			className="grid-row site-utility-examples__row">
			<div className="grid-col grid-col-2">
				<span
					style={{ backgroundColor: designToken.hex_value }}
					className="site-utility-examples__color-chip"></span>
			</div>
			<div className="grid-col grid-col-3 site-utility-examples__class">
				<span className={classNames}>{designToken.token_name}</span>
			</div>
			<div className="grid-col grid-col-3 site-utility-examples__class">
				<span className={classNames}>{designToken.token_family}</span>
			</div>
			<div className="grid-col grid-col-1 site-utility-examples__class">
				<span className={classNames}>{designToken.token_grade}</span>
			</div>
			<div className="grid-col grid-col-2 site-utility-examples__class">
				<span className={classNames}>{designToken.token_variant}</span>
			</div>
			<div className="grid-col grid-col-1 site-utility-examples__class">
				<span className="bg-base-lightest font-mono-xs">
					{designToken.hex_value}
				</span>
			</div>
		</div>
	);
};

const drawGroup = (designTokenGroup) => {
	return (
		<React.Fragment key={designTokenGroup.heading}>
			<div className="grid-row site-utility-examples__row">
				<div className="site-utility-examples__sub-header">
					{designTokenGroup.heading}
				</div>
			</div>
			{designTokenGroup.tokens.map((designToken) =>
				drawDetailedRow(designToken)
			)}
		</React.Fragment>
	);
};

/**
 * This component is for demonstrating Color system tokens
 * @param {Array<TokenDemonstrationParams>} param0.designTokenDisplayParams
 * @returns
 */
const ColorSystemTokenDemonstration = ({ designTokenDisplayParams }) => {
	return (
		<div className="site-utility-examples">
			<div className="grid-row site-utility-examples__header-row">
				<div className="grid-col grid-col-2 site-utility-examples__heading">
					<span>Color</span>
				</div>
				<div className="grid-col grid-col-3 site-utility-examples__heading">
					<span>Token</span>
				</div>
				<div className="grid-col grid-col-3 site-utility-examples__heading">
					<span>Family</span>
				</div>
				<div className="grid-col grid-col-1 site-utility-examples__heading">
					<span>Grade</span>
				</div>
				<div className="grid-col grid-col-2 site-utility-examples__heading">
					<span>Variant</span>
				</div>
				<div className="grid-col grid-col-1 site-utility-examples__heading">
					<span>Hex Value</span>
				</div>
			</div>
			{designTokenDisplayParams.groups.map((designTokenGroup) =>
				drawGroup(designTokenGroup)
			)}
		</div>
	);
};

ColorSystemTokenDemonstration.propTypes = {
	designTokenDisplayParams: PropType.object,
};

export default ColorSystemTokenDemonstration;
