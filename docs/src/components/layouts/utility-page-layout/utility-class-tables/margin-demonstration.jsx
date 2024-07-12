import React from 'react';
import PropType from 'prop-types';

/**
 * @typedef MarginDemonstrationClass
 * @param {string} class_name The class name.
 * @param {string} calculated_value The calculated value of the size of the token.
 * @param {string} negative_style Direction of negative margin if applicable.
 * @param {string} demonstration_class The class name used to display example.
 * @param {string} additional_example_classes Any additional classes to add to the example.
 */

/**
 * Helper to draw a utility class example.
 * @param {MarginDemonstrationClass} utilityClass The utility class.
 * @returns
 */
const drawRow = (utilityClass, negative_style) => {
	const hasComputedValue =
		String(utilityClass.calculated_value ?? '').trim().length > 0;

	// Use ComputedValue to set display style for auto/negative margins.
	const exampleDisplay =
		utilityClass.calculated_value === 'auto'
			? 'auto'
			: utilityClass.calculated_value.startsWith('-')
			? negative_style
			: 'positive';
	const columnSize = exampleDisplay == 'auto' ? 'grid-col-6' : 'grid-col-auto';
	return (
		<div
			key={utilityClass.class_name}
			className="grid-row site-utility-examples__row">
			<div className="grid-col site-utility-examples__class grid-col-fill">
				<span>.{utilityClass.class_name}</span>
			</div>
			{hasComputedValue && (
				<div className="grid-col site-utility-examples__value grid-col-1">
					<span>{utilityClass.calculated_value}</span>
				</div>
			)}
			<div className={`grid-col site-utility-examples__example ${columnSize}`}>
				{(() => {
					switch (exampleDisplay) {
						case 'positive':
							return (
								<div
									className={`bg-secondary-light ${utilityClass.demonstration_class}`}>
									<div className="square-4 border-1px bg-white"></div>
								</div>
							);
						case 'auto':
							return (
								<div className="bg-secondary-light width-full">
									<div
										className={`square-4 border-1px bg-white ${utilityClass.demonstration_class}`}></div>
								</div>
							);
						case 'negative-bottom':
							return (
								<div className="position-relative height-15 width-4 border-1px bg-white">
									<div
										className={`bg-secondary-light pin-bottom pin-x ${utilityClass.demonstration_class}`}></div>
								</div>
							);
						case 'negative-top':
							return (
								<div className="position-relative height-15 width-4 border-1px bg-white">
									<div
										className={`bg-secondary-light pin-top pin-x ${utilityClass.demonstration_class}`}></div>
								</div>
							);
						case 'negative-left':
							return (
								<div className="position-relative height-4 width-15 border-1px bg-white">
									<div
										className={`bg-secondary-light pin-left height-full ${utilityClass.demonstration_class}`}></div>
								</div>
							);
						case 'negative-right':
							return (
								<div className="position-relative height-4 width-15 border-1px bg-white">
									<div
										className={`bg-secondary-light pin-right height-full ${utilityClass.demonstration_class}`}></div>
								</div>
							);
						case 'negative-y':
							return (
								<div className="position-relative height-card-lg width-4 border-1px bg-white">
									<div
										className={`bg-secondary-light pin-top width-full ${utilityClass.demonstration_class}`}></div>
									<div
										className={`bg-secondary-light pin-bottom width-full ${utilityClass.demonstration_class}`}></div>
								</div>
							);
						case 'negative-x':
							return (
								<div className="position-relative height-4 width-card-lg border-1px bg-white">
									<div
										className={`bg-secondary-light pin-right height-full ${utilityClass.demonstration_class}`}></div>
									<div
										className={`bg-secondary-light pin-left height-full ${utilityClass.demonstration_class}`}></div>
								</div>
							);
						default:
							return <>Unknown display_text value</>;
					}
				})()}
			</div>
		</div>
	);
};

/**
 *  creates visual row for groups of utility classes.
 * @param utilityClassGroup class groups for display
 * @param utilityClassDisplayParams optional display parameters
 * @returns {Element}
 */

const drawGroup = (utilityClassGroup) => {
	return (
		<React.Fragment key={utilityClassGroup.heading}>
			<div className="grid-row site-utility-examples__row">
				<div className="site-utility-examples__sub-header">
					{utilityClassGroup.heading}
				</div>
			</div>
			{utilityClassGroup.classes.map((utilityClass) =>
				drawRow(utilityClass, utilityClassGroup.negative_style)
			)}
		</React.Fragment>
	);
};

/**
 * This component is for demonstrating the space created by margin.
 * @param {Array<MarginDemonstrationParams>} utilityClassDisplayParams
 * @returns
 */
const MarginDemonstration = ({ utilityClassDisplayParams }) => {
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
					drawGroup(utilityClassGroup)
				)}

			{utilityClassDisplayParams.classes &&
				utilityClassDisplayParams.classes.map((utilityClass) =>
					drawRow(utilityClass)
				)}
		</div>
	);
};

MarginDemonstration.propTypes = {
	utilityClassDisplayParams: PropType.object,
};

export default MarginDemonstration;
