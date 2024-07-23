import React from 'react';
import PropType from 'prop-types';

/**
 * @typedef DisplayDemonstrationClass
 * @param {string} class_name The class name.
 * @param {string} calculated_value The calculated value of the size of the token.
 * @param {string} additional_example_classes Any additional classes to add to the example.

 */

/**
 * Helper to draw a utility class example.
 * @param {DisplayDemonstrationClass} utilityClass The utility class.
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
			className="grid-row site-utility-examples__row margin-bottom-2 padding-bottom-2">
			<div className="grid-col site-utility-examples__class grid-col-fill">
				<span>.{utilityClass.class_name}</span>
			</div>
			{hasComputedValue && (
				<div className="grid-col site-utility-examples__value grid-col-2 text-align-left">
					<span>{utilityClass.calculated_value}</span>
				</div>
			)}
			<div className="grid-col site-utility-examples__example grid-col-auto">
				{(() => {
					switch (utilityClassDisplayParams.type) {
						case 'display':
							if (utilityClass.class_name == 'display-table-cell') {
								return (
									<div className="display-table">
										<div className="display-table-row">
											<div className="display-table-cell border-1px border-white bg-secondary-light padding-x-5 padding-y-3"></div>
											<div className="display-table-cell border-1px border-white bg-secondary-light padding-x-5 padding-y-3"></div>
										</div>
									</div>
								);
							}
							return (
								<div className="width-card">
									<div
										className={`${classNames} width-card" bg-secondary-light border-1px border-secondary-light padding-x-10 padding-y-3`}></div>
								</div>
							);
						case 'overflow':
							return (
								<div className="usa-grid-col grid-col-3 padding-right-3">
									<div
										className={`${classNames} square-card border-1px border-error padding-2 margin-y-1`}>
										<div className="square-card bg-primary-lighter"></div>
									</div>
								</div>
							);
						default:
							return <p className={classNames}>Unknown display_text value</p>;
					}
				})()}
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
				drawRow(
					utilityClass,
					utilityClassDisplayParams,
					utilityClassGroup.heading
				)
			)}
		</React.Fragment>
	);
};

/**
 * This component is for demonstrating flex display.
 * @param {Array<TextDemonstrationParams>} param0.utilityClassDisplayParams
 * @returns
 */
const DisplayDemonstration = ({ utilityClassDisplayParams }) => {
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
					drawRow(utilityClass, utilityClassDisplayParams)
				)}
		</div>
	);
};

DisplayDemonstration.propTypes = {
	utilityClassDisplayParams: PropType.object,
};

export default DisplayDemonstration;
