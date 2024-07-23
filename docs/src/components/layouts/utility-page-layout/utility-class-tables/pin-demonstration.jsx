import React from 'react';
import PropType from 'prop-types';

/**
 * @typedef PinDemonstrationClass
 * @param {string} class_name The class name.
 * @param {string} calculated_value The calculated value of the size of the token.
 * @param {string} additional_example_classes Any additional classes to add to the example.
 */

/**
 * Helper to draw a utility class example.
 * @param {PinDemonstrationClass} utilityClass The utility class.
 * @returns
 */
const drawRow = (utilityClass, utilityClassDisplayParams) => {
	// Merge example classes.
	const classNames = [
		utilityClassDisplayParams.additional_example_classes,
		utilityClass.additional_example_classes,
		utilityClass.class_name,
	].join(' ');
	return (
		<div className="grid-col-6">
			<div className="position-relative border-1px border-secondary-light padding-2 height-card margin-bottom-2">
				<div className={`${classNames} bg-secondary-light padding-2`}>
					<div className="margin-0">
						<span>.{utilityClass.class_name}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

/**
 * This component is for demonstrating flex display.
 * @param {Array<TextDemonstrationParams>} param0.utilityClassDisplayParams
 * @returns
 */
const PinDemonstration = ({ utilityClassDisplayParams }) => {
	return (
		<div className="site-utility-examples">
			<div className="grid-row grid-gap">
				{utilityClassDisplayParams.classes &&
					utilityClassDisplayParams.classes.map((utilityClass) =>
						drawRow(utilityClass, utilityClassDisplayParams)
					)}
			</div>
		</div>
	);
};

PinDemonstration.propTypes = {
	utilityClassDisplayParams: PropType.object,
};

export default PinDemonstration;
