import React from 'react';
import PropTypes from 'prop-types';

import NCIBigFooter from './nci-big';
import BigFooter from './big';
import MediumFooter from './medium';
import SlimFooter from './slim';

export const Footer = ({ accountId, categoryId, variant }) => {
	return (
		<>
			{variant === 'big' && <BigFooter />}
			{variant === 'nci-big' && (
				<NCIBigFooter accountId={accountId} categoryId={categoryId} />
			)}
			{variant === 'medium' && <MediumFooter />}
			{variant === 'slim' && <SlimFooter />}
		</>
	);
};

Footer.propTypes = {
	variant: PropTypes.oneOf(['big', 'nci-big', 'medium', 'slim']),
	accountId: PropTypes.string,
	categoryId: PropTypes.string,
};

Footer.defaultProps = {
	variant: 'medium',
	accountId: '',
	categoryId: '',
};

export default Footer;
