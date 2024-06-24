import React from 'react';
import PropType from 'prop-types';

/**
 * @typedef OpacityTableDemonstrationClass
 * @param {string} class_name The class name.
 * @param {string} calculated_value The calculated value of the size of the token.
 * @param {string} additional_example_classes Any additional classes to add to the example.

 */

/**
 * Helper to draw a utility class example.
 * @param {OpacityTableDemonstrationClass} utilityClass The utility class.
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
		<div
			key={utilityClass.class_name}
			className="grid-row grid-gap site-utility-examples__row">
			<div className="grid-col grid-col-fill site-utility-examples__class">
				<span className="bg-base-lightest">.{utilityClass.class_name}</span>
			</div>
			<div className="grid-col grid-col-6 site-utility-examples__example">
				<div className="bg-primary grid-row radius-sm height-4 padding-x-1 flex-align-center">
					<div
						className={`grid-col height-05 bg-white radius-left-pill ${classNames}`}></div>
					<div
						className={`grid-col height-05 bg-black radius-right-pill ${classNames}`}></div>
				</div>
			</div>
			<div className="grid-col grid-col-1 text-right site-utility-examples__value">
				<span>{utilityClass.calculated_value}</span>
			</div>
		</div>
	);
};

/**
 * This component is for demonstrating the opacity utilities.
 * @param {Array<OpacityTableDemonstrationParams>} param0.utilityClassDisplayParams
 * @returns
 */
const OpacityTableDemonstration = ({ utilityClassDisplayParams }) => (
	<div className="site-utility-examples">
		<div className="grid-row site-utility-examples__header-row">
			<div className="grid-col site-utility-examples__heading grid-col-fill">
				<span>Class name</span>
			</div>
			<div className="grid-col site-utility-examples__heading grid-col-auto">
				<span>Estimated computed value</span>
			</div>
		</div>

		{utilityClassDisplayParams.classes &&
			utilityClassDisplayParams.classes.map((utilityClass) =>
				drawRow(utilityClass, utilityClassDisplayParams)
			)}
	</div>
);

OpacityTableDemonstration.propTypes = {
	utilityClassDisplayParams: PropType.object,
};

export default OpacityTableDemonstration;
