import React from 'react';
import PropType from 'prop-types';

const FontWeightRow = ({ token, weight, variable }) => {
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
					<code inline="true">{weight}</code>
				</span>
			</td>
			<td data-title="Example" className="overflow-hidden">
				<span className={`font-sans-8 text-${token}`}>Tallahassee</span>
			</td>
			<td data-title="Setting var">
				<span>${variable}</span>
			</td>
		</tr>
	);
};

FontWeightRow.propTypes = {
	token: PropType.string,
	weight: PropType.string,
	variable: PropType.string,
};

export default FontWeightRow;
