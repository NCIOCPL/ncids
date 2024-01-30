import React from 'react';
import PropType from 'prop-types';
import { Helmet } from 'react-helmet';

// The code below is meant to be run on Static HTML to initialize
// ncids-js components in a <code> preview block. However, even when
// statically published, the Gatsby app is still a React app on the
// client side that re-hydrates the page. When a link produced by
// gatsby-link is clicked on within the Gatsby app, it does not just
// take the user to another page, but pre-fetches the page and replaces
// the contents of _gatsby. Thus the window object is never cleared out.
// So the code below tries to manage that we do not create multiple
// listeners for the same page if a user navigates away and then back
// to the page. It also makes sure we limit the number of event
// listeners.
const NciDsJsInit = ({ path, children }) => {
	const html = `
		window.ncidsPreviewHandlers = window.ncidsPreviewHandlers || {};
	  if (!window.ncidsPreviewHandlers['${path}']) {
			const handler = (preview) => {
				${children}
		  }
	  }
    if (!window.ncidsPreviewListenerRegistered) {
		  window.addEventListener('NCIDS:Preview', (evt) => {
        for(const [, handler] of Object.entries(window.ncidsPreviewHandlers)) {
		      handler(evt.target);
        }
		  });
      window.ncidsPreviewListenerRegistered = true;
    }
	`;
	return (
		<Helmet>
			<script>{html}</script>
		</Helmet>
	);
};

NciDsJsInit.propTypes = {
	path: PropType.string,
	children: PropType.string,
};

export default NciDsJsInit;
