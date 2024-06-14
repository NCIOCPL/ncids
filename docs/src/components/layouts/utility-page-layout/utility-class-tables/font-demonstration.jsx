import React from 'react';
import PropType from 'prop-types';

/**
 * @typedef FontDemonstrationClass
 * @param {string} class_name The class name.
 * @param {string} calculated_value The calculated value of the size of the token.
 * @param {string} additional_example_classes Any additional classes to add to the example.
 */

// Example text as used on USWDS documentation site. (and exists in the public domain)
const wordDisplayText = `Tuscaloosa`;

/**
 * Helper to draw a utility class example.
 * @param {FontDemonstrationClass} utilityClass The utility class.
 * @returns
 */
const drawRow = (utilityClass, utilityClassDisplayParams) => {
	// Merge example classes.
	const classNames = [
		utilityClassDisplayParams.additional_example_classes,
		utilityClass.additional_example_classes,
		utilityClass.class_name,
	].join(' ');

	const hasComputedValue =
		String(utilityClass.calculated_value ?? '').trim().length > 0;
	return (
		<div
			key={utilityClass.class_name}
			className="grid-row site-utility-examples__row">
			<div className="grid-col site-utility-examples__class grid-col-5">
				<span>.{utilityClass.class_name}</span>
			</div>
			<div className="grid-col site-utility-examples__example grid-col-fill">
				<span className={classNames}>{wordDisplayText}</span>
			</div>
			{hasComputedValue && (
				<div className="grid-col site-utility-examples__value grid-col-auto">
					<span>{utilityClass.calculated_value}</span>
				</div>
			)}
		</div>
	);
};

/**
 *  creates visual row for groups of utility classes.
 * @param utilityClassGroup class groups for display
 * @param utilityClassDisplayParams optional display parameters
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
 * This component is for demonstrating font family.
 * @param {Array<FontDemonstrationParams>} utilityClassDisplayParams
 * @returns
 */
const FontDemonstration = ({ utilityClassDisplayParams }) => {
	return (
		<div className="site-utility-examples">
			<div className="grid-row site-utility-examples__header-row">
				<div className="grid-col site-utility-examples__heading grid-col-fill">
					<span>Class name</span>
				</div>
				<div className="grid-col site-utility-examples__heading grid-col-auto">
					<span>Estimated computed value</span>
				</div>
			</div>

			{/* Please do use both on a page. */}
			{utilityClassDisplayParams.groups &&
				utilityClassDisplayParams.groups.map((utilityClassGroup) =>
					drawGroup(utilityClassGroup, utilityClassDisplayParams)
				)}

			{utilityClassDisplayParams.classes &&
				utilityClassDisplayParams.classes.map((utilityClass) =>
					drawRow(utilityClass, utilityClassDisplayParams)
				)}
		</div>
	);
};

FontDemonstration.propTypes = {
	utilityClassDisplayParams: PropType.object,
};

export default FontDemonstration;
