import React from 'react';
import PropTypes from 'prop-types';

import NCIBigFooter from './nci-big';

export const Footer = ({ accountId, categoryId, variant = 'nci-big' }) => {
	return (
		<>
			{variant === 'nci-big' && (
				<NCIBigFooter accountId={accountId} categoryId={categoryId} />
			)}
		</>
	);
};

Footer.propTypes = {
	variant: PropTypes.oneOf(['nci-big']),
	accountId: PropTypes.string,
	categoryId: PropTypes.string,
};

export default Footer;
