import React from 'react';
import PropType from 'prop-types';

const FontFamilyRow = ({ token, setting, variable }) => {
	return (
		<tr>
			<th scope="row" data-title="Token">
				<span className="text-normal">
					<code inline="true" className="text-no-wrap">
						&apos;{token}&apos;
					</code>
				</span>
			</th>
			<td data-title="Default">
				<span>&apos;{setting}&apos;</span>
			</td>
			<td data-title="Settings var">
				<span>${variable}</span>
			</td>
		</tr>
	);
};

FontFamilyRow.propTypes = {
	token: PropType.string,
	setting: PropType.string,
	variable: PropType.string,
};

export default FontFamilyRow;
