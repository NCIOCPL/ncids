import React from 'react';
import PropType from 'prop-types';

const FontSizeThemeTable = ({ children }) => {
	return (
		<div className="site-table-wrapper">
			<table className="usa-table--borderless site-table-responsive">
				<thead>
					<tr>
						<th scope="col">Token</th>
						<th scope="col">Default</th>
						<th scope="col">Example</th>
						<th scope="col">Value</th>
						<th scope="col">Settings variable</th>
					</tr>
				</thead>
				<tbody className="font-mono-xs">{children}</tbody>
			</table>
		</div>
	);
};

FontSizeThemeTable.propTypes = {
	children: PropType.elementType,
};

export default FontSizeThemeTable;
