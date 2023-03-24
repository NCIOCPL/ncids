import React from 'react';
import GithubSlugger from 'github-slugger';
import textContent from 'react-addons-text-content';

import linkIcon from '@nciocpl/ncids-css/uswds-img/usa-icons/link.svg';

const getHeaderEl = (level, children) => {
	switch (level) {
		case 1:
			return <h1 className="site-linked-header">{children}</h1>;
		case 2:
			return <h2 className="site-linked-header">{children}</h2>;
		case 3:
			return <h3 className="site-linked-header">{children}</h3>;
		case 4:
			return <h4 className="site-linked-header">{children}</h4>;
		case 5:
			return <h5 className="site-linked-header">{children}</h5>;
		case 6:
			return <h6 className="site-linked-header">{children}</h6>;
		default:
			throw new Error(`Unknown header level ${level}`);
	}
};

/**
 * Function for getting Markdown H1-6 components that add anchor links.
 * @param {number} level the level to display
 * @returns a component function for that level
 */
const MarkdownHeader = (level) => ({ children }) => {
	// Setup ID for anchor link.
	const slugger = new GithubSlugger();
	const text = children ? textContent(children) : '';
	const id = text ? slugger.slug(text) : '';

	// Wrap the contents with the anchor link.
	const anchorLink = (
		<a
			id={id}
			href={`#${id}`}
			aria-label={`${text} permalink`}
			className="site-linked-header__link">
			<img src={linkIcon} alt="" className="site-linked-header__icon" />
		</a>
	);

	const anchorContents = (
		<>
			{anchorLink}
			{children}
		</>
	);

	const headerEl = getHeaderEl(level, anchorContents);

	return headerEl;
};

export default MarkdownHeader;
