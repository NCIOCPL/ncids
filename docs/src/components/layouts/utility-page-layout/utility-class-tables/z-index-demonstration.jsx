import React from 'react';
import PropType from 'prop-types';

/**
 * @typedef ZIndexDemonstrationClass
 * @param {string} class_name The class name.
 * @param {string} calculated_value The calculated value of the size of the token.
 * @param {string} additional_example_classes Any additional classes to add to the example.

 */

/**
 * Helper to draw a utility class example.
 * @param {ZIndexDemonstrationClass} utilityClass The utility class.
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
			className={`${classNames} border border-ink radius-lg width-card-lg padding-2 padding-top-5 minh-10 margin-left-0 display-flex flex-justify flex-align-start margin-top-neg-3 position-relative shadow-3`}>
			<div className="float-left">.{utilityClass.class_name}</div>
			{hasComputedValue && (
				<div className="float-right">{utilityClass.calculated_value}</div>
			)}
		</div>
	);
};

/**
 * This component is for demonstrating flex display.
 * @param {Array<TextDemonstrationParams>} param0.utilityClassDisplayParams
 * @returns
 */
const ZIndexDemonstration = ({ utilityClassDisplayParams }) => {
	return (
		<div className="site-utility-examples">
			<div className="display-block padding-y-5">
				{utilityClassDisplayParams.classes &&
					utilityClassDisplayParams.classes.map((utilityClass) =>
						drawRow(utilityClass, utilityClassDisplayParams)
					)}
			</div>
		</div>
	);
};

ZIndexDemonstration.propTypes = {
	utilityClassDisplayParams: PropType.object,
};

export default ZIndexDemonstration;
