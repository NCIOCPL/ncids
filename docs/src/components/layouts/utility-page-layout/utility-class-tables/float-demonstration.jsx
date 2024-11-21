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
 * @param {FloatDemonstrationClass} utilityClass The utility class.
 * @returns
 */
const drawRow = (utilityClass, utilityClassDisplayParams) => {
	// Merge example classes.
	const classNames = [
		utilityClassDisplayParams.additional_example_classes,
		utilityClass.additional_example_classes,
		utilityClass.class_name,
	].join(' ');

	switch (utilityClassDisplayParams.type) {
		case 'float':
			return (
				<div className="clearfix" key={utilityClass.class_name}>
					<p className={`${classNames} bg-base-lighter padding-2`}>
						<span>.{utilityClass.class_name}</span>
					</p>
				</div>
			);
		case 'clearfix':
			return (
				<div className="clearfix border-1px" key={utilityClass.class_name}>
					<span className="float-left bg-secondary-light padding-2">
						.float-left
					</span>
					<span className="float-right bg-secondary-light padding-2">
						.float-right
					</span>
				</div>
			);
		default:
			return <p>unknown value</p>;
	}
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
 * This component is for demonstrating dom css float properties
 * @param {Array<TextDemonstrationParams>} param0.utilityClassDisplayParams
 * @returns
 */
const FloatDemonstration = ({ utilityClassDisplayParams }) => {
	return (
		<div className="site-utility-examples">
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

FloatDemonstration.propTypes = {
	utilityClassDisplayParams: PropType.object,
};

export default FloatDemonstration;
