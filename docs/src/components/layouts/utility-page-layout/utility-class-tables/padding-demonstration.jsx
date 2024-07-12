import React from 'react';
import PropType from 'prop-types';

/**
 * @typedef PaddingDemonstrationClass
 * @param {string} class_name The class name.
 * @param {string} calculated_value The calculated value of the size of the token.
 * @param {string} padding_style Direction of negative margin if applicable.
 * @param {string} demonstration_class The class name used to display example.
 * @param {string} additional_example_classes Any additional classes to add to the example.
 */

/**
 * Helper to draw a utility class example.
 * @param {PaddingDemonstrationClass} utilityClass The utility class.
 * @returns
 */
const drawRow = (utilityClass, padding_style) => {
	const hasComputedValue =
		String(utilityClass.calculated_value ?? '').trim().length > 0;

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
			<div className="grid-col site-utility-examples__example grid-col-auto">
				{(() => {
					switch (padding_style) {
						case 'all':
							return (
								<div
									className={`square-card-lg border-1px bg-primary-lighter margin-0 display-inline-block ${utilityClass.class_name}`}>
									<div className="bg-white height-full"></div>
								</div>
							);
						case 'bottom':
							return (
								<div className="position-relative square-15 border-1px margin-0 bg-white">
									<div
										className={`bg-primary-lighter pin-bottom pin-x ${utilityClass.demonstration_class}`}></div>
								</div>
							);
						case 'top':
							return (
								<div className="position-relative square-15 border-1px margin-0 bg-white">
									<div
										className={`bg-primary-lighter pin-top pin-x ${utilityClass.demonstration_class}`}></div>
								</div>
							);
						case 'right':
							return (
								<div className="position-relative square-15 border-1px margin-0 bg-white">
									<div
										className={`bg-primary-lighter pin-right pin-y ${utilityClass.demonstration_class}`}></div>
								</div>
							);
						case 'left':
							return (
								<div className="position-relative square-15 border-1px margin-0 bg-white">
									<div
										className={`bg-primary-lighter pin-left pin-y ${utilityClass.demonstration_class}`}></div>
								</div>
							);
						case 'x':
							return (
								<div className="position-relative width-card-lg height-15 border-1px margin-0 bg-white">
									<div
										className={`bg-primary-lighter pin-right pin-y ${utilityClass.demonstration_class}`}></div>
									<div
										className={`bg-primary-lighter pin-left pin-y ${utilityClass.demonstration_class}`}></div>
								</div>
							);
						case 'y':
							return (
								<div className="position-relative height-card-lg width-15 border-1px margin-0 bg-white">
									<div
										className={`bg-primary-lighter pin-top pin-x ${utilityClass.demonstration_class}`}></div>
									<div
										className={`bg-primary-lighter pin-bottom pin-x ${utilityClass.demonstration_class}`}></div>
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
				drawRow(utilityClass, utilityClassGroup.padding_style)
			)}
		</React.Fragment>
	);
};

/**
 * This component is for demonstrating the space created by padding.
 * @param {Array<PaddingDemonstrationParams>} utilityClassDisplayParams
 * @returns
 */
const PaddingDemonstration = ({ utilityClassDisplayParams }) => {
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
					drawRow(utilityClass, utilityClassDisplayParams.padding_style)
				)}
		</div>
	);
};

PaddingDemonstration.propTypes = {
	utilityClassDisplayParams: PropType.object,
};

export default PaddingDemonstration;
