import React from 'react';
import PropTypes from 'prop-types';

import NCIBigFooter from './nci-big';

export const Footer = ({ accountId, categoryId, variant }) => {
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

Footer.defaultProps = {
	variant: 'nci-big',
	accountId: '',
	categoryId: '',
};

export default Footer;
