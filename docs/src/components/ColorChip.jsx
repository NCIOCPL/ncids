import React from 'react';
import PropType from 'prop-types';

const ColorChip = ({ color }) => {
	const size = 24;
	const inlineStyle = {
		background: color || '#000',
		borderRadius: '6px',
		width: `${size}px`,
		height: `${size}px`,
	};
	return <div style={inlineStyle}></div>;
};

ColorChip.propTypes = {
	color: PropType.string,
};

export default ColorChip;
