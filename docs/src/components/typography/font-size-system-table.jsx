import React from 'react';
import PropType from 'prop-types';

import systemSizes from './system-sizes';

const FontSizeSystemRow = ({ token, pixels }) => {
	return (
		<tr>
			<th scope="row" data-title="System token">
				<span className="text-normal">
					<code className="text-no-wrap">{token}</code>
				</span>
			</th>
			<td data-title="Target size">
				<span>{pixels}px</span>
			</td>
			<td data-title="Example" className="line-height-sans-1 overflow-hidden">
				<span className={`font-sans-${token}`}>Tallahassee</span>
			</td>
		</tr>
	);
};

const FontSizeSystemTable = () => {
	return (
		<div className="site-table-wrapper">
			<table className="usa-table--borderless site-table-responsive width-full">
				<thead>
					<tr>
						<th scope="col">Token</th>
						<th scope="col">Value</th>
						<th scope="col">Example</th>
					</tr>
				</thead>
				<tbody className="font-mono-2xs">
					{systemSizes.map((sizeDef, idx) => (
						<FontSizeSystemRow
							key={idx}
							token={sizeDef.token}
							pixels={sizeDef.pixels}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};

FontSizeSystemTable.propTypes = {};

FontSizeSystemRow.propTypes = {
	token: PropType.string,
	pixels: PropType.number,
};

export default FontSizeSystemTable;
