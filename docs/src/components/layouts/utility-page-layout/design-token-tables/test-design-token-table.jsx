import React from 'react';
import PropType from 'prop-types';

const TestDesignTokenTable = ({ designTokenDisplayParams }) => {
	return designTokenDisplayParams.tokens.map((designToken) => (
		<p key={designToken.token_name}>{designToken.token_name}</p>
	));
};

TestDesignTokenTable.propTypes = {
	designTokenDisplayParams: PropType.object,
};

export default TestDesignTokenTable;
