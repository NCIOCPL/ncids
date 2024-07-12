import React from 'react';
import PropType from 'prop-types';

/**
 * @typedef ColorThemeTokenDemonstrationClass
 * @param {string} token_name The token name.
 * @param {string} system_token The underlying system token this state or theme token maps to.
 * @param {string} settings_variable The class name.
 * @param {string} hex_value The calculated value of the size of the token.
 * @param {string} additional_example_classes Any additional classes to add to the example.

 */

/**
 * Helper to draw a theme token example.
 * @param {ColorThemeTokenDemonstrationClass} designToken The design token.
 * @returns
 */
const drawRow = (designToken) => {
	// Merge example classes.
	const classNames = ['font-mono-xs', 'bg-base-lightest'].join(' ');
	return (
		<div
			key={designToken.token_name}
			className="grid-row site-utility-examples__row">
			<div className="grid-col grid-col-1">
				<span
					style={{ backgroundColor: designToken.hex_value }}
					className="site-utility-examples__color-chip"></span>
			</div>
			<div className="grid-col grid-col-3 site-utility-examples__class">
				<span className={classNames}>{designToken.token_name}</span>
			</div>
			<div className="grid-col grid-col-3 site-utility-examples__class">
				<span className={classNames}>{designToken.system_token}</span>
			</div>
			<div className="grid-col grid-col-4 site-utility-examples__class">
				<span className={classNames}>{designToken.settings_variable}</span>
			</div>
			<div className="grid-col grid-col-1 site-utility-examples__class">
				<span className="text-background font-mono-xs">
					{designToken.hex_value}
				</span>
			</div>
		</div>
	);
};

/**
 * This component is for demonstrating Color tokens
 * @param {Array<TokenDemonstrationParams>} param0.designTokenDisplayParams
 * @returns
 */
const ColorThemeTokenDemonstration = ({ designTokenDisplayParams }) => {
	return (
		<div className="site-utility-examples">
			<div className="grid-row site-utility-examples__header-row">
				<div className="grid-col grid-col-1 site-utility-examples__heading">
					<span>Color</span>
				</div>
				<div className="grid-col grid-col-3 site-utility-examples__heading">
					<span>Token</span>
				</div>
				<div className="grid-col grid-col-3 site-utility-examples__heading">
					<span>System Token</span>
				</div>
				<div className="grid-col grid-col-4 site-utility-examples__heading">
					<span>Setting Value</span>
				</div>
				<div className="grid-col grid-col-1 site-utility-examples__heading">
					<span>Hex Value</span>
				</div>
			</div>
			{designTokenDisplayParams.tokens.map((token) => drawRow(token))}
		</div>
	);
};

ColorThemeTokenDemonstration.propTypes = {
	designTokenDisplayParams: PropType.object,
};

export default ColorThemeTokenDemonstration;
