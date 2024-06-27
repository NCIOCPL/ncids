import React from 'react';
import * as UtilityModules from '../data/utility-modules.json';

/**
 * Helper to render out a table of our utility modules
 * @returns a table of utility modules
 */
const UtilitiesTable = () => {
	const utilModules = UtilityModules.default;
	const tableRows = [
		<div key="row_header" className="grid-row grid-gap text-bold border-bottom">
			<div className="grid-col-fill padding-y-1">Utility Module Name</div>
			<div className="grid-col grid-col-auto padding-y-1">Gzip File Size</div>
			<div className="grid-col grid-col-3 padding-y-1 text-right">
				Non-Gzip File Size
			</div>
		</div>,
	];
	Object.keys(utilModules).forEach((moduleKey, rowNumber) => {
		// This formula was borrowed from USWDS documentation site, and translated into JS
		const gzipSize =
			Math.round((utilModules[moduleKey].size * 0.185 + Number.EPSILON) * 100) /
			100;
		tableRows.push(
			<div
				key={`row_${rowNumber}`}
				className="grid-row grid-gap border-gray-30 border-bottom">
				<div className="grid-col-fill padding-y-1">{moduleKey}</div>
				<div className="grid-col grid-col-auto padding-y-1">{gzipSize}</div>
				<div className="grid-col grid-col-3 padding-y-1 text-right">
					{utilModules[moduleKey].size}
				</div>
			</div>
		);
	});
	return React.createElement(
		'div',
		{ className: 'padding-2 border radius-md' },
		tableRows
	);
};

export default UtilitiesTable;
