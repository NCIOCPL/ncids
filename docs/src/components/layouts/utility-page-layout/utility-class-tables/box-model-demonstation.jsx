import React from 'react';
import PropType from 'prop-types';

/**
 * @typedef TextDemonstrationClass
 * @param {string} class_name The class name.
 * @param {string} calculated_value The calculated value of the size of the token.
 * @param {string} additional_example_classes Any additional classes to add to the example.

 */

/**
 * Helper to draw a utility class example.
 * @param {BoxModelDemonstrationClass} utilityClass The utility class.
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
			className="grid-row grid-gap site-utility-examples__row">
			<div className="grid-col grid-col-fill site-utility-examples__class">
				<span className="bg-base-lightest">.{utilityClass.class_name}</span>
			</div>
			{hasComputedValue && (
				<div className="grid-col grid-col-auto site-utility-examples__value">
					<span>{utilityClass.calculated_value}</span>
				</div>
			)}
			<div className="grid-col grid-col-auto site-utility-examples__example">
				<div className={classNames}></div>
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
 * @param {Array<TextDemonstrationParams>} param0.utilityClassDisplayParams
 * @returns
 */
const BoxModelDemonstration = ({ utilityClassDisplayParams }) => {
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

BoxModelDemonstration.propTypes = {
	utilityClassDisplayParams: PropType.object,
};

export default BoxModelDemonstration;
