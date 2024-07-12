import React from 'react';
import PropType from 'prop-types';

/**
 * @typedef TextColorDemonstrationClass
 * @param {string} class_name The class name.
 * @param {string} hex_value The calculated value of the size of the token.
 * @param {string} additional_example_classes Any additional classes to add to the example.

 */

/**
 * Helper to draw a utility class example.
 * @param {TextColorDemonstrationClass} utilityClass The utility class.
 * @returns
 */
const drawRow = (utilityClass, utilityClassDisplayParams) => {
	// If this is a background color example, do not add the class to the text
	const backgroundColor = utilityClass.class_name?.includes('bg') || false;
	// Merge example classes.
	const classNames = [
		'radius-md',
		'padding-05',
		utilityClassDisplayParams.additional_example_classes,
		utilityClass.additional_example_classes,
		!backgroundColor ? utilityClass.class_name : 'bg-base-lightest',
	].join(' ');

	return (
		<div
			key={utilityClass.class_name}
			className="grid-row site-utility-examples__row">
			{backgroundColor && (
				<div
					className={`${utilityClass.class_name} grid-col-1 site-utility-examples__color-chip`}></div>
			)}
			<div className={`grid-col site-utility-examples__class grid-col-fill`}>
				<span className={classNames}>.{utilityClass.class_name}</span>
			</div>
			<div className="site-utility-examples__color-example grid-col grid-col-auto">
				<span
					style={{ backgroundColor: utilityClass.hex_value }}
					className="site-utility-examples__color-preview-chip"></span>
				<span className="font-mono-xs">{utilityClass.hex_value}</span>
			</div>
		</div>
	);
};

const drawGroup = (utilityClassGroup, utilityClassDisplayParams) => {
	return (
		<React.Fragment key={utilityClassGroup.heading}>
			<div className="grid-row site-utility-examples__row">
				<div className="site-utility-examples__sub-header">
					{utilityClassGroup.heading}
				</div>
			</div>
			{utilityClassGroup.classes.map((utilityClass) =>
				drawRow(utilityClass, utilityClassDisplayParams)
			)}
		</React.Fragment>
	);
};

/**
 * This component is for demonstrating text blocks, such as line height,
 * measure, font-weight, etc.
 * @param {Array<TextColorDemonstrationParams>} param0.utilityClassDisplayParams
 * @returns
 */
const TextColorDemonstration = ({ utilityClassDisplayParams }) => {
	return (
		<div className="site-utility-examples">
			<div className="grid-row site-utility-examples__header-row">
				<div className="grid-col site-utility-examples__heading grid-col-fill">
					<span>Class name</span>
				</div>
				<div className="grid-col site-utility-examples__heading grid-col-auto">
					<span>Hexadecimal Value</span>
				</div>
			</div>
			{utilityClassDisplayParams.groups.map((utilityClassGroup) =>
				drawGroup(utilityClassGroup, utilityClassDisplayParams)
			)}
		</div>
	);
};

TextColorDemonstration.propTypes = {
	utilityClassDisplayParams: PropType.object,
};

export default TextColorDemonstration;
