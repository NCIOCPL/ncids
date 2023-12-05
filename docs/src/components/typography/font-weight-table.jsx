import React from 'react';
import PropType from 'prop-types';

const FontWeightTable = ({ children }) => {
	return (
		<div className="site-table-wrapper overflow-hidden">
			<table className="usa-table--borderless site-table-responsive width-full">
				<thead>
					<tr>
						<th scope="col">Token</th>
						<th scope="col">Default</th>
						<th scope="col">Example</th>
						<th scope="col">Settings variable</th>
					</tr>
				</thead>
				<tbody className="font-mono-xs">{children}</tbody>
			</table>
		</div>
	);
};

FontWeightTable.propTypes = {
	children: PropType.elementType,
};

export default FontWeightTable;
