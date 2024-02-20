import React from 'react';
import PropType from 'prop-types';
import ScriptWrapper from './ScriptWrapper';

/**
 * Component for registering JS to be executed for each HTML preview
 * element on an MDX page. You should only ever have 1 instance on
 * and MDX page.
 *
 * @see https://github.com/NCIOCPL/ncids/wiki/Technical:-NCIDS-Initialization-in-Gatsby
 */
const NciDsJsInit = ({ path, children }) => {
	const html = `
		window.ncidsPreviewHandlers = window.ncidsPreviewHandlers || {};
	  if (!window.ncidsPreviewHandlers['${path}']) {
			window.ncidsPreviewHandlers['${path}'] = (preview) => {
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
		window.dispatchEvent(new Event('NCIDS:ShouldBeReady', { bubbles: true }));
	`;
	return <ScriptWrapper>{html}</ScriptWrapper>;
};

NciDsJsInit.propTypes = {
	path: PropType.string,
	children: PropType.string,
};

export default NciDsJsInit;
