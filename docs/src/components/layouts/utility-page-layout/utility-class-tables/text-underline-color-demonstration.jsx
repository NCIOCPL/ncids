import React from 'react';
import PropType from 'prop-types';

/**
 * @typedef TextUnderlineColorDemonstrationClass
 * @param {string} class_name The class name.
 * @param {string} hex_value The calculated value of the size of the token.
 * @param {string} additional_example_classes Any additional classes to add to the example.
 */

/**
 * Creates the row for the text underline color example.
 * @param utilityClass classname of the utility class.
 * @param utilityClassDisplayParams Display parameters for example text underline color.
 * @returns {Element}
 */

const drawRow = (utilityClass, utilityClassDisplayParams) => {
	// If this is a background color example, do not add the class to the text.
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
				<span className={classNames}>
					.{utilityClass.class_name}
					{utilityClassDisplayParams.additional_example_classes && (
						<span className="text-base margin-left-neg-05">
							.{utilityClassDisplayParams.additional_example_classes}
						</span>
					)}
				</span>
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

/**
 * Helper to group together utility class examples.
 * @param utilityClassGroup Group information for display.
 * @param utilityClassDisplayParams Display parameters for example text underline color.
 * @returns {Element}
 */
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
 * Created the HTML example for text underline color
 * @param utilityClassDisplayParams
 * @returns {Element}
 */
const TextUnderlineColorDemonstration = ({ utilityClassDisplayParams }) => {
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

TextUnderlineColorDemonstration.propTypes = {
	utilityClassDisplayParams: PropType.object,
};

export default TextUnderlineColorDemonstration;
