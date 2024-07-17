import React from 'react';
import PropType from 'prop-types';

/**
 * @typedef FlexDemonstrationClass
 * @param {string} class_name The class name.
 * @param {string} calculated_value The calculated value of the size of the token.
 * @param {string} additional_example_classes Any additional classes to add to the example.

 */

/**
 * Helper to draw a utility class example.
 * @param {FlexDemonstrationClass} utilityClass The utility class.
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
		case 'flex':
			return (
				<div
					key={utilityClass.class_name}
					className="grid-row grid-gap-sm margin-bottom-1">
					<div className={`grid-col ${classNames}`}>
						<div className="height-6 width-full display-flex flex-align-center bg-secondary-light flex-justify-center padding-x-105">
							<span>.{utilityClass.class_name}</span>
						</div>
					</div>
					<div className="grid-col flex-1">
						<div className="height-6 width-full display-flex border border-base-dark"></div>
					</div>
					<div className="grid-col flex-1">
						<div className="height-6 width-full display-flex border border-base-dark"></div>
					</div>
					<div className="grid-col flex-1">
						<div className="height-6 width-full display-flex border border-base-dark"></div>
					</div>
				</div>
			);
		case 'direction':
			return (
				<>
					<span>.{utilityClass.class_name}</span>
					<div
						key={utilityClass.class_name}
						className={`grid-row ${classNames}`}>
						<div className="grid-col flex-1">
							<div className="height-6 bg-secondary-light width-full display-flex border border-white"></div>
						</div>
						<div className="grid-col flex-1">
							<div className="height-6 bg-secondary-light width-full display-flex border border-white"></div>
						</div>
						<div className="grid-col flex-1">
							<div className="height-6 bg-secondary-light width-full display-flex border border-white"></div>
						</div>
						<div className="grid-col flex-1">
							<div className="height-6 bg-secondary-light width-full display-flex border border-white"></div>
						</div>
					</div>
				</>
			);
		case 'wrap':
			return (
				<>
					<span>.{utilityClass.class_name}</span>
					<div
						key={utilityClass.class_name}
						className={`grid-row ${classNames}`}>
						<div className="grid-col-4">
							<div className="height-6 width-full display-flex flex-align-center bg-secondary-light flex-justify-center border border-white">
								<span>.grid-col-4</span>
							</div>
						</div>
						<div className="grid-col-4">
							<div className="height-6 width-full display-flex flex-align-center bg-secondary-light flex-justify-center border border-white">
								<span>.grid-col-4</span>
							</div>
						</div>
						<div className="grid-col-4">
							<div className="height-6 width-full display-flex flex-align-center bg-secondary-light flex-justify-center border border-white">
								<span>.grid-col-4</span>
							</div>
						</div>
						<div className="grid-col-4">
							<div className="height-6 width-full display-flex flex-align-center bg-secondary-light flex-justify-center border border-white">
								<span>.grid-col-4</span>
							</div>
						</div>
					</div>
				</>
			);
		case 'align':
			return (
				<>
					<div className="margin-top-2">.{utilityClass.class_name}</div>
					<div
						key={utilityClass.class_name}
						className={`grid-row flex-align-start margin-top-2 border-bottom border-base-light padding-bottom-2 margin-bottom-2 ${classNames}`}>
						<div className="grid-auto padding-1px">
							<div className="height-full minh-7 minw-7 width-full display-flex flex-align-center bg-secondary-light flex-justify-center"></div>
						</div>
						<div className="grid-auto padding-1px">
							<div className="height-full minh-8 minw-8 width-full display-flex flex-align-center bg-secondary-light flex-justify-center"></div>
						</div>
						<div className="grid-auto padding-1px">
							<div className="height-full minh-9 minw-9 width-full display-flex flex-align-center bg-secondary-light flex-justify-center"></div>
						</div>
						<div className="grid-auto padding-1px">
							<div className="height-full minh-10 minw-10 width-full display-flex flex-align-center bg-secondary-light flex-justify-center"></div>
						</div>
					</div>
				</>
			);
		case 'align-self':
			return (
				<>
					<div
						key={utilityClass.class_name}
						className={`grid-row margin-top-2 border-base-light padding-bottom-2 margin-bottom-2 minh-card margin-x-neg-05 flex-no-wrap ${classNames}`}>
						<div className="flex-1 padding-1px flex-align-self-start display-flex flex-align-center bg-secondary-light flex-justify-center minh-7 minw-7 padding-1 margin-bottom-1 margin-x-05">
							<span>.flex-align-self-start</span>
						</div>
						<div className="flex-1 padding-1px flex-align-self-center display-flex flex-align-center bg-secondary-light flex-justify-center minh-7 minw-7 padding-1 margin-bottom-1 margin-x-05">
							<span>.flex-align-self-center</span>
						</div>
						<div className="flex-1 padding-1px flex-align-self-end display-flex flex-align-center bg-secondary-light flex-justify-center minh-7 minw-7 padding-1 margin-bottom-1 margin-x-05">
							<span>.flex-align-self-end</span>
						</div>
						<div className="flex-1 padding-1px flex-align-self-stretch display-flex flex-align-center bg-secondary-light flex-justify-center minh-7 minw-7 padding-1 margin-bottom-1 margin-x-05">
							<span>.flex-align-self-stretch</span>
						</div>
					</div>
				</>
			);
		case 'justify':
			return (
				<>
					<div className="margin-top-2">.{utilityClass.class_name}</div>
					<div
						key={utilityClass.class_name}
						className={`grid-row flex- margin-top-2 border-bottom border-base-light padding-bottom-2 margin-bottom-2 ${classNames}`}>
						<div className="grid-auto padding-1px">
							<div className="height-full minh-7 minw-7 width-full display-flex flex-align-center bg-secondary-light flex-justify-center"></div>
						</div>
						<div className="grid-auto padding-1px">
							<div className="height-full minh-8 minw-8 width-full display-flex flex-align-center bg-secondary-light flex-justify-center"></div>
						</div>
						<div className="grid-auto padding-1px">
							<div className="height-full minh-9 minw-9 width-full display-flex flex-align-center bg-secondary-light flex-justify-center"></div>
						</div>
						<div className="grid-auto padding-1px">
							<div className="height-full minh-10 minw-10 width-full display-flex flex-align-center bg-secondary-light flex-justify-center"></div>
						</div>
					</div>
				</>
			);
		case 'order':
			return (
				<>
					<div className="grid-row grid-gap-sm">
						<div className="grid-col-auto order-11">
							<div className="padding-x-1 padding-y-1 border border-secondary-light margin-y-1px display-flex flex-column flex-align-start">
								<span className="font-lang-3xs margin-bottom-2">
									intital: 1
								</span>
								<span>.order-11</span>
							</div>
						</div>
						<div className="grid-col-auto order-10">
							<div className="padding-x-1 padding-y-1 border border-secondary-light margin-y-1px display-flex flex-column flex-align-start">
								<span className="font-lang-3xs margin-bottom-2">
									intital: 2
								</span>
								<span>.order-10</span>
							</div>
						</div>
						<div className="grid-col-auto order-9">
							<div className="padding-x-1 padding-y-1 border border-secondary-light margin-y-1px display-flex flex-column flex-align-start">
								<span className="font-lang-3xs margin-bottom-2">
									intital: 3
								</span>
								<span>.order-9</span>
							</div>
						</div>
						<div className="grid-col-auto order-8">
							<div className="padding-x-1 padding-y-1 border border-secondary-light margin-y-1px display-flex flex-column flex-align-start">
								<span className="font-lang-3xs margin-bottom-2">
									intital: 4
								</span>
								<span>.order-8</span>
							</div>
						</div>
						<div className="grid-col-auto order-7">
							<div className="padding-x-1 padding-y-1 border border-secondary-light margin-y-1px display-flex flex-column flex-align-start">
								<span className="font-lang-3xs margin-bottom-2">
									intital: 5
								</span>
								<span>.order-7</span>
							</div>
						</div>
						<div className="grid-col-auto order-6">
							<div className="padding-x-1 padding-y-1 border border-secondary-light margin-y-1px display-flex flex-column flex-align-start">
								<span className="font-lang-3xs margin-bottom-2">
									intital: 6
								</span>
								<span>.order-6</span>
							</div>
						</div>
						<div className="grid-col-auto order-5">
							<div className="padding-x-1 padding-y-1 border border-secondary-light margin-y-1px display-flex flex-column flex-align-start">
								<span className="font-lang-3xs margin-bottom-2">
									intital: 7
								</span>
								<span>.order-5</span>
							</div>
						</div>
						<div className="grid-col-auto order-4">
							<div className="padding-x-1 padding-y-1 border border-secondary-light margin-y-1px display-flex flex-column flex-align-start">
								<span className="font-lang-3xs margin-bottom-2">
									intital: 8
								</span>
								<span>.order-4</span>
							</div>
						</div>
						<div className="grid-col-auto order-3">
							<div className="padding-x-1 padding-y-1 border border-secondary-light margin-y-1px display-flex flex-column flex-align-start">
								<span className="font-lang-3xs margin-bottom-2">
									intital: 9
								</span>
								<span>.order-3</span>
							</div>
						</div>
						<div className="grid-col-auto order-2">
							<div className="padding-x-1 padding-y-1 border border-secondary-light margin-y-1px display-flex flex-column flex-align-start">
								<span className="font-lang-3xs margin-bottom-2">
									intital: 10
								</span>
								<span>.order-2</span>
							</div>
						</div>
						<div className="grid-col-auto order-1">
							<div className="padding-x-1 padding-y-1 border border-secondary-light margin-y-1px display-flex flex-column flex-align-start">
								<span className="font-lang-3xs margin-bottom-2">
									intital: 11
								</span>
								<span>.order-1</span>
							</div>
						</div>
						<div className="grid-col-auto order-0">
							<div className="padding-x-1 padding-y-1 border border-secondary-light margin-y-1px display-flex flex-column flex-align-start">
								<span className="font-lang-3xs margin-bottom-2">
									intital: 12
								</span>
								<span>.order-0</span>
							</div>
						</div>
						<div className="grid-col-auto order-initial">
							<div className="padding-x-1 padding-y-1 border border-secondary-light margin-y-1px display-flex flex-column flex-align-start">
								<span className="font-lang-3xs margin-bottom-2">
									intital: 13
								</span>
								<span>.order-initial</span>
							</div>
						</div>
						<div className="grid-col-auto order-last">
							<div className="padding-x-1 padding-y-1 border border-secondary-light margin-y-1px display-flex flex-column flex-align-start">
								<span className="font-lang-3xs margin-bottom-2">
									intital: 14
								</span>
								<span>.order-last</span>
							</div>
						</div>
						<div className="grid-col-auto order-first">
							<div className="padding-x-1 padding-y-1 border border-secondary-light margin-y-1px display-flex flex-column flex-align-start">
								<span className="font-lang-3xs margin-bottom-2">
									intital: 15
								</span>
								<span>.order-first</span>
							</div>
						</div>
					</div>
				</>
			);
		default:
			return <p className={classNames}>Unknown display_text value</p>;
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
const FlexDemonstration = ({ utilityClassDisplayParams }) => {
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

FlexDemonstration.propTypes = {
	utilityClassDisplayParams: PropType.object,
};

export default FlexDemonstration;
