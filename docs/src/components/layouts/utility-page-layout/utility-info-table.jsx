import React from 'react';
import PropTypes from 'prop-types';
import * as utilityModules from '../../../data/utility-modules.json';
import { withPrefix } from 'gatsby';

const PATH_TO_UTILITY_PAGE = withPrefix('/foundations/example-utility');

const renderStateModifiers = (activeStates) => {
	if (activeStates.length === 0) {
		return <>None</>;
	}
	const states = [];
	if (activeStates.includes('active')) {
		states.push(<a href={`${PATH_TO_UTILITY_PAGE}#active`}>Active</a>);
	}
	if (activeStates.includes('hover')) {
		states.push(<a href={`${PATH_TO_UTILITY_PAGE}#hover`}>Hover</a>);
	}
	if (activeStates.includes('focus')) {
		states.push(<a href={`${PATH_TO_UTILITY_PAGE}#focus`}>Focus</a>);
	}
	if (activeStates.includes('visited')) {
		states.push(<a href={`${PATH_TO_UTILITY_PAGE}#visited`}>Visited</a>);
	}
	return states;
};

/**
 * Draws the Utility Information Table holding the state modifiers and sizes.
 * @param {string} param0.utilityModuleName The name of the utility module to draw.
 * @returns
 */
const UtilityInfoTable = ({ utilityModuleName }) => {
	const utilityInfo = utilityModules[utilityModuleName];
	// This formula was borrowed from USWDS documentation site, and translated into JS
	const gzipSize =
		Math.round((utilityInfo.size * 0.185 + Number.EPSILON) * 100) / 100;

	if (!utilityInfo) {
		return (
			<div>Error, {utilityModuleName}, utility information not found.</div>
		);
	}
	return (
		<table className="usa-table usa-table--stacked" width="100%">
			<caption className="usa-sr-only">
				Utility module usage information
			</caption>
			<thead>
				<tr>
					<th scope="col" data-title="Module name">
						Module name
					</th>
					<th
						scope="col"
						width="22%"
						data-title="Responsive modifiers enabled?">
						Are responsive modifiers turned on?
					</th>
					<th scope="col" width="25%" data-title="Active state modifiers">
						Active state modifiers
					</th>
					<th scope="col" width="10%" data-title="Gzip file size">
						Gzip file size
					</th>
					<th scope="col" width="12%" data-title="Non-gzip file size">
						Non-gzip file size
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row" data-label="Module name">{`${utilityModuleName}`}</th>
					<td data-label="Responsive modifiers enabled?">
						<span className="font-code-xs">
							{utilityInfo.is_responsive_enabled ? (
								<a href={`${PATH_TO_UTILITY_PAGE}#responsive`}>True</a>
							) : (
								'False'
							)}
						</span>
					</td>
					<td data-label="Active state modifiers">
						<span className="font-code-xs">
							{renderStateModifiers(utilityInfo.state_modifiers)}
						</span>
					</td>
					<td data-label="Gzip file size">
						<span className="font-code-xs">{gzipSize} KB</span>
					</td>
					<td data-label="Non-gzip file size">
						<span className="font-code-xs">{utilityInfo.size} KB</span>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

UtilityInfoTable.propTypes = {
	utilityModuleName: PropTypes.string,
};

export default UtilityInfoTable;
