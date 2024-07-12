import React from 'react';
import PropType from 'prop-types';

import * as UtilityClassTableComponents from './utility-class-tables';

/**
 * Gets a utility class table component.
 *
 * @param {string} classDisplayComponent component name.
 * @returns the component.
 */
const getUtilityClassTableComponent = (utilityClassDisplayComponent) => {
	return UtilityClassTableComponents[utilityClassDisplayComponent]?.default;
};

/**
 * Factory for Utility layout to dynamically render utility class tables from the
 * utility-class-tables folder.
 * @param {*} param.classDisplayComponent The name of the component.
 * @param {*} param.utilityClasses An array of the utility class information.
 * @returns
 */
const UtilityClassTableFactory = ({
	utilityClassDisplayComponent,
	utilityClassDisplayParams,
}) => {
	const component = getUtilityClassTableComponent(utilityClassDisplayComponent);
	if (!component)
		return (
			<div className="usa-alert usa-alert--error" role="alert">
				<div className="usa-alert__body">
					<h3 className="usa-alert__heading">
						Error Getting Utility Class Table Component
					</h3>
					<p className="usa-alert__text">
						{utilityClassDisplayComponent ??
							'UtilityClassTableComponents[utilityClassDisplayComponent]'}{' '}
						is not defined in utility-class-tables
					</p>
				</div>
			</div>
		);
	return React.createElement(component, { utilityClassDisplayParams });
};

UtilityClassTableFactory.propTypes = {
	utilityClassDisplayComponent: PropType.string,
	utilityClassDisplayParams: PropType.object,
};

export default UtilityClassTableFactory;
