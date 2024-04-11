import React from 'react';
import PropType from 'prop-types';

const TestUtilityClassTable = ({ utilityClassDisplayParams }) => {
	return utilityClassDisplayParams.classes.map((utilityClass) => (
		<p key={utilityClass.class_name}>{utilityClass.class_name}</p>
	));
};

TestUtilityClassTable.propTypes = {
	utilityClassDisplayParams: PropType.object,
};

export default TestUtilityClassTable;
