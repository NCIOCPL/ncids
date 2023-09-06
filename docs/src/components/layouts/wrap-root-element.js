import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import markdownComponents from './markdown-components';

function wrapRootElement({ element }) {
	return <MDXProvider components={markdownComponents}>{element}</MDXProvider>;
}

export default wrapRootElement;
