import React from 'react';
import PropType from 'prop-types';

const FontFamilyTable = ({ children }) => {
	return (
		<div className="site-table-wrapper">
			<table className="usa-table--borderless site-table-responsive">
				<thead>
					<tr>
						<th scope="col">Token</th>
						<th scope="col">Default</th>
						<th scope="col">Settings variable</th>
					</tr>
				</thead>
				<tbody className="font-mono-xs">{children}</tbody>
			</table>
		</div>
	);
};

FontFamilyTable.propTypes = {
	children: PropType.elementType,
};

export default FontFamilyTable;
