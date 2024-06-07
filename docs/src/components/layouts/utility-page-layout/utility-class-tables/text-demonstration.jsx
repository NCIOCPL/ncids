import React from 'react';
import PropType from 'prop-types';

/**
 * @typedef TextDemonstrationClass
 * @param {string} class_name The class name.
 * @param {string} calculated_value The calculated value of the size of the token.
 * @param {string} additional_example_classes Any additional classes to add to the example.

 */

// Example text as used on USWDS documentation site. (and exists in the public domain)
const longDisplayText = `In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend’s friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.`;
const preFormattedDisplayText = `formatted line   with     multiple       spaces`;
const shortDisplayText = `The Celebrated Jumping Frog of Calaveras County`;
const alignmentDisplayText = `A line of text and`;

/**
 * Helper to draw a utility class example.
 * @param {TextDemonstrationClass} utilityClass The utility class.
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
			className="grid-row site-utility-examples__row">
			<div className="grid-col site-utility-examples__class grid-col-fill">
				<span>.{utilityClass.class_name}</span>
			</div>
			{hasComputedValue && (
				<div className="grid-col site-utility-examples__value grid-col-auto">
					<span>{utilityClass.calculated_value}</span>
				</div>
			)}
			<div className="grid-col site-utility-examples__example grid-col-12 width-full maxw-none">
				{(() => {
					switch (utilityClassDisplayParams.display_text) {
						case 'long':
							return <p className={classNames}>{longDisplayText}</p>;
						case 'pre':
							return (
								<span className={classNames}>{preFormattedDisplayText}</span>
							);
						case 'short':
							return <p className={classNames}>{shortDisplayText}</p>;
						case 'valign':
							return (
								<p>
									{alignmentDisplayText}
									<span
										className={`display-inline-block bg-error height-2px width-4 ${classNames}`}></span>
									<span className={classNames}>{classNames}</span>
								</p>
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
const TextDemonstration = ({ utilityClassDisplayParams }) => {
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

TextDemonstration.propTypes = {
	utilityClassDisplayParams: PropType.object,
};

export default TextDemonstration;
