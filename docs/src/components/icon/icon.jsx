import React from 'react';
import PropTypes from 'prop-types';

import svgsprite from '../../../static/icons/ncids-icons.svg';

export const Icon = ({
	glyph,
	classes = '',
	description = '',
	...otherProps
}) => {
	const ariaTags = {
		'aria-hidden': !description,
		'aria-label': description ? description : undefined,
	};

	return (
		<svg
			className={`usa-icon ${classes}`}
			role="img"
			{...ariaTags}
			{...otherProps}>
			<use xlinkHref={svgsprite + `#${glyph}`}></use>
		</svg>
	);
};

Icon.propTypes = {
	classes: PropTypes.string,
	description: PropTypes.string,
	glyph: PropTypes.string.isRequired,
	otherProps: PropTypes.node,
};

export default Icon;
