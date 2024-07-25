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
			className="grid-row site-utility-examples__row">
			<div className="grid-col grid-col-fill site-utility-examples__class">
				<span className="bg-base-lightest">.{utilityClass.class_name}</span>
			</div>
			<div className="bg-primary grid-col-6 site-utility-examples__example">
				<ul className={`display-block bg-white ${classNames}`}>
					<li>List Item 1</li>
					<li>List Item 2</li>
					<li>List Item 3</li>
				</ul>
			</div>
		</div>
	);
};

/**
 * This component is for demonstrating the opacity utilities.
 * @param {Array<OpacityTableDemonstrationParams>} param0.utilityClassDisplayParams
 * @returns
 */
const ListResetDemonstration = ({ utilityClassDisplayParams }) => (
	<div className="site-utility-examples">
		<div className="grid-row site-utility-examples__header-row">
			<div className="grid-col site-utility-examples__heading grid-col-fill">
				<span>Class name</span>
			</div>
			<div className="grid-col site-utility-examples__heading grid-col-auto">
				<span>Estimated computed value</span>
			</div>
		</div>
		<div key="default" className="grid-row site-utility-examples__row">
			<div className="grid-col grid-col-fill site-utility-examples__class">
				<span className="bg-base-lightest">default</span>
			</div>
			<div className="bg-primary grid-col-6 site-utility-examples__example">
				<ul className="display-block bg-white">
					<li>List Item 1</li>
					<li>List Item 2</li>
					<li>List Item 3</li>
				</ul>
			</div>
		</div>

		{utilityClassDisplayParams.classes &&
			utilityClassDisplayParams.classes.map((utilityClass) =>
				drawRow(utilityClass, utilityClassDisplayParams)
			)}
	</div>
);

ListResetDemonstration.propTypes = {
	utilityClassDisplayParams: PropType.object,
};

export default ListResetDemonstration;
