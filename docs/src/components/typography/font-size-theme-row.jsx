import React from 'react';
import PropType from 'prop-types';

import systemSizes from './system-sizes';

const FontSizeThemeRow = ({ token, size, variable }) => {
	const pixels = systemSizes[size]?.pixels;
	const exampleClass = `font-sans-${token}`;

	return (
		<tr>
			<th scope="row" data-title="Theme token">
				<span className="text-normal">
					<code inline="true" className="text-no-wrap">
						&apos;{token}&apos;
					</code>
				</span>
			</th>
			<td data-title="Default">
				<span>
					<code inline="true">{size}</code>
				</span>
			</td>
			<td data-title="Example" className="line-height-sans-1 overflow-hidden">
				<span className={exampleClass}>Tallahassee</span>
			</td>
			<td data-title="Value">
				<span>{pixels}px</span>
			</td>
			<td data-title="Setting var">
				<span>${variable}</span>
			</td>
		</tr>
	);
};

FontSizeThemeRow.propTypes = {
	token: PropType.string,
	size: PropType.string,
	variable: PropType.string,
};

export default FontSizeThemeRow;
