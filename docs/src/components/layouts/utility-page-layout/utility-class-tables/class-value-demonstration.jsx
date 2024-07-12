import React from 'react';
import PropType from 'prop-types';

/**
 * @typedef ClassValueDemonstrationClass
 * @param {string} class_name The class name.
 * @param {string} calculated_value The calculated value of the size of the token.
 */

/**
 * Helper to draw a utility class example.
 * @param {ClassValueDemonstrationClass} utilityClass The utility class.
 * @returns
 */
const drawRow = (utilityClass) => (
	<div
		key={utilityClass.class_name}
		className="grid-row site-utility-examples__row">
		<div className="grid-col grid-col-fill site-utility-examples__class">
			<span className="bg-base-lightest">.{utilityClass.class_name}</span>
		</div>
		<div className="grid-col grid-col-auto site-utility-examples__value">
			<span>{utilityClass.calculated_value}</span>
		</div>
	</div>
);

const drawGroup = (utilityClassGroup) => (
	<React.Fragment key={utilityClassGroup.heading}>
		<div className="grid-row site-utility-examples__row">
			<div className="site-utility-examples__sub-header">
				{utilityClassGroup.heading}
			</div>
		</div>
		{utilityClassGroup.classes.map((utilityClass) => drawRow(utilityClass))}
	</React.Fragment>
);

/**
 * This component is for demonstrating text blocks, such as line height,
 * measure, font-weight, etc.
 * @param {Array<TextDemonstrationParams>} param0.utilityClassDisplayParams
 * @returns
 */
const ClassValueDemonstration = ({ utilityClassDisplayParams }) => (
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

ClassValueDemonstration.propTypes = {
	utilityClassDisplayParams: PropType.object,
};

export default ClassValueDemonstration;
