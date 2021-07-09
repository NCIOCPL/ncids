import PropTypes from 'prop-types';
import React from 'react';

export const Icon = ({ color, icon, size, variant, ...props }) => {
	const classes = ['ncids-icon', 'ncids-icon-' + icon];
	color ? classes.push('text-' + color) : '';
	size ? classes.push('ncids-icon--size-' + size) : '';
	variant === 'solid'
		? classes.push('ncids-icon--solid')
		: classes.push('ncids-icon--brands');

	return (
		<span
			aria-hidden="true"
			className={classes.join(' ')}
			focusable="false"
			role="img"
			{...props}
		/>
	);
};

Icon.propTypes = {
	color: PropTypes.string,
	icon: PropTypes.string.isRequired,
	size: PropTypes.number,
	variant: PropTypes.oneOf(['brands', 'solid']),
};

Icon.defaultProps = {
	icon: '',
	variant: 'solid',
};

export default Icon;
