import React from 'react';
import PropTypes from 'prop-types';

import Icon from './icon';

export const IconCatalog = ({ glyphList }) => {
	return (
		<div className="display-flex flex-wrap margin-top-5 icon-catalog">
			{glyphList.map((glyphName) => {
				return (
					<div key={glyphName} className="icon-catalog__item">
						<div className="icon-container">
							<Icon glyph={glyphName} />
						</div>
						<span>{glyphName}</span>
					</div>
				);
			})}
		</div>
	);
};

IconCatalog.propTypes = {
	glyphList: PropTypes.array.isRequired,
};

export default IconCatalog;
