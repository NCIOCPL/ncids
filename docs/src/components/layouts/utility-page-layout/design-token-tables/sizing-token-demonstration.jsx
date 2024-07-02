import React from 'react';
import PropType from 'prop-types';

/**
 * @typedef SizingTokenDemonstrationClass
 * @param {string} token_name The token name.
 * @param {string} system_token The underlying system token this state or theme token maps to.
 * @param {string} settings_variable The class name.
 * @param {string} hex_value The calculated value of the size of the token.
 * @param {string} additional_example_classes Any additional classes to add to the example.

 */

/**
 * Helper to draw a theme token example.
 * @param {SizingTokenDemonstrationClass} designToken The design token.
 * @returns
 */
const drawRow = (designToken) => {
	// Merge example classes.
	const classNames = ['font-mono-xs', 'bg-base-lightest'].join(' ');
	const nameArray = designToken.token_name.split(' ');
	return (
		<div
			key={designToken.token_name}
			className="grid-row site-utility-examples__row">
			<div className="grid-col grid-col-3">
				{nameArray.map((item, index) => {
					return (
						<span key={`token-name${item}`}>
							<span className={classNames}>{item}</span>
							{index < nameArray.length - 1 ? ', ' : ' '}
						</span>
					);
				})}
			</div>
			<div className="grid-col grid-col-3">
				<span className="font-mono-xs">{designToken.multiple}</span>
			</div>
			<div className="grid-col grid-col-3">
				<span className="font-mono-xs">{designToken.calculated_value}</span>
			</div>
			<div className="grid-col grid-col-3">
				{designToken.additional_example_classes && (
					<span
						className={`display-block width-full ${designToken.additional_example_classes} bg-primary`}></span>
				)}
			</div>
		</div>
	);
};

/**
 * This component is for demonstrating Size tokens
 * @param {Array<TokenDemonstrationParams>} param0.designTokenDisplayParams
 * @returns
 */
const SizingTokenDemonstration = ({ designTokenDisplayParams }) => {
	return (
		<div className="site-utility-examples">
			<div className="grid-row site-utility-examples__header-row">
				<div className="grid-col grid-col-3 site-utility-examples__heading">
					<span>Token</span>
				</div>
				<div className="grid-col grid-col-3 site-utility-examples__heading">
					<span>Multiple</span>
				</div>
				<div className="grid-col grid-col-4 site-utility-examples__heading">
					<span>Value</span>
				</div>
				<div className="grid-col grid-col-1 site-utility-examples__heading">
					<span>Example</span>
				</div>
			</div>
			{designTokenDisplayParams.tokens.map((token) => drawRow(token))}
		</div>
	);
};

SizingTokenDemonstration.propTypes = {
	designTokenDisplayParams: PropType.object,
};

export default SizingTokenDemonstration;
