import React from 'react';
import PropType from 'prop-types';

/**
 * @typedef ColorDemonstrationClass
 * @param {string} class_name The class name.
 * @param {string} hex_value The calculated value of the size of the token.
 * @param {string} additional_example_classes Any additional classes to add to the example.

 */

/**
 * Helper to draw the appropriate color chip example
 * background_color type will draw two color chips, for white and black backgrounds
 *
 * @param {String} exampleType the example type (default: color_chip)
 * @returns
 */
const drawColorChip = (utilityClass, utilityClassDisplayParams) => {
	// Merge example classes *for color chips*
	const classNames = [
		'radius-md',
		'height-full',
		'width-full',
		utilityClass.class_name,
		utilityClassDisplayParams.additional_example_classes,
		utilityClass.additional_example_classes,
	].join(' ');

	// Return appropriate HTML based on example type
	switch (utilityClassDisplayParams?.example_type) {
		case 'background_color':
			return (
				<div className="grid-col-2">
					<div className="padding-05 site-utility-examples__color-chip bg-white">
						<span className={classNames}></span>
					</div>
					<div className="padding-05 site-utility-examples__color-chip bg-ink">
						<span className={classNames}></span>
					</div>
				</div>
			);
		default:
			return (
				<div
					className={`${utilityClass.class_name} grid-col-1 site-utility-examples__color-chip`}></div>
			);
	}
};

/**
 * Helper to draw a utility class example.
 * @param {ColorDemonstrationClass} utilityClass The utility class.
 * @returns
 */
const drawRow = (utilityClass, utilityClassDisplayParams) => {
	return (
		<div
			key={utilityClass.class_name}
			className="grid-row site-utility-examples__row">
			{drawColorChip(utilityClass, utilityClassDisplayParams)}
			<div className={`grid-col site-utility-examples__class grid-col-fill`}>
				<span className="bg-base-lightest">.{utilityClass.class_name}</span>
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
 * @param {Array<ColorDemonstrationParams>} param0.utilityClassDisplayParams
 * @returns
 */
const ColorDemonstration = ({ utilityClassDisplayParams }) => {
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

ColorDemonstration.propTypes = {
	utilityClassDisplayParams: PropType.object,
};

export default ColorDemonstration;
