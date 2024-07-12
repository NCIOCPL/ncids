import React from 'react';
import PropType from 'prop-types';

import * as DesignTokenTableComponents from './design-token-tables';

/**
 * Gets a design token table component.
 *
 * @param {string} tokenDisplayComponent component name.
 * @returns the component.
 */
const getDesignTokenTableComponent = (designTokenDisplayComponent) => {
	return DesignTokenTableComponents[designTokenDisplayComponent]?.default;
};

/**
 * Factory for Utility layout to dynamically render design token tables from the
 * design-token-tables folder.
 * @param {*} param.tokenDisplayComponent The name of the component.
 * @param {*} param.designTokens An array of the design token information.
 * @returns
 */
const DesignTokenTableFactory = ({
	designTokenDisplayComponent,
	designTokenDisplayParams,
}) => {
	const component = getDesignTokenTableComponent(designTokenDisplayComponent);
	if (!component)
		return (
			<div className="usa-alert usa-alert--error" role="alert">
				<div className="usa-alert__body">
					<h3 className="usa-alert__heading">
						Error Getting Design Token Table Component
					</h3>
					<p className="usa-alert__text">
						{designTokenDisplayComponent ??
							`DesignTokenTableComponents[${designTokenDisplayComponent}]`}{' '}
						is not defined in design-token-tables
					</p>
				</div>
			</div>
		);
	return React.createElement(component, { designTokenDisplayParams });
};

DesignTokenTableFactory.propTypes = {
	designTokenDisplayComponent: PropType.string,
	designTokenDisplayParams: PropType.object,
};

export default DesignTokenTableFactory;
