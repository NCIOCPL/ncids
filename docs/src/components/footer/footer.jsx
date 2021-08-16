import React from 'react';
import PropTypes from 'prop-types';

import NCIBigFooter from './nci-big';
import BigFooter from './big';
import MediumFooter from './medium';
import SlimFooter from './slim';

export const Footer = ({ variant }) => {
	return (
		<>
			{variant === 'big' && <BigFooter />}
			{variant === 'nci-big' && <NCIBigFooter />}
			{variant === 'medium' && <MediumFooter />}
			{variant === 'slim' && <SlimFooter />}
		</>
	);
};

Footer.propTypes = {
	variant: PropTypes.oneOf(['big', 'nci-big', 'medium', 'slim']),
};

Footer.defaultProps = {
	variant: 'medium',
};

export default Footer;
