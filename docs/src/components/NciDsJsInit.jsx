import React from 'react';
import PropType from 'prop-types';
import { Helmet } from 'react-helmet';

const NciDsJsInit = ({ children }) => {
	const html = `
			const handler = (preview) => {
				${children}
			}
			window.addEventListener('NCIDS:Preview', (evt) => {
				handler(evt.target);
			})
	`;
	return (
		<Helmet>
			<script>{html}</script>
		</Helmet>
	);
};

NciDsJsInit.propTypes = {
	children: PropType.string,
};

export default NciDsJsInit;
