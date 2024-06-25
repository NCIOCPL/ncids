import React from 'react';
import textContent from 'react-addons-text-content';
import { useSlugger } from '../hooks/slugger';

const getHeaderEl = (level, children) => {
	switch (level) {
		case 1:
			return <h1>{children}</h1>;
		case 2:
			return <h2>{children}</h2>;
		case 3:
			return <h3>{children}</h3>;
		case 4:
			return <h4>{children}</h4>;
		case 5:
			return <h5>{children}</h5>;
		case 6:
			return <h6>{children}</h6>;
		default:
			throw new Error(`Unknown header level ${level}`);
	}
};

/**
 * Function for getting Markdown H1-6 components that add anchor links.
 * @param {number} level the level to display
 * @returns a component function for that level
 */
const MarkdownHeader = (level) => {
	return function WithLevel({ prefix = null, children }) {
		// Setup ID for anchor link.
		/* eslint-disable-next-line react-hooks/rules-of-hooks -- Our version of eslint react does not handle curried functions. However, the code has been updated to the syntax that says it will work. See https://github.com/facebook/react/issues/20531. */
		const slugger = useSlugger();
		const text = children ? textContent(children) : '';
		const id = text
			? slugger.slug(prefix !== null ? `${prefix}-${text}` : text)
			: '';

		// Wrap the contents with the anchor link.
		const anchorLink = (
			<a id={id} href={`#${id}`} className="site-linked-header">
				{text}
			</a>
		);

		const headerEl = getHeaderEl(level, anchorLink);

		return headerEl;
	};
};

export default MarkdownHeader;
