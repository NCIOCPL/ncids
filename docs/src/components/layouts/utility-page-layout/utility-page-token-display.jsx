import React from 'react';
import PropTypes from 'prop-types';
import FrontmatterMarkdown from '../../frontmatter-markdown';
import DesignTokenTableFactory from './design-token-table-factory';

import GithubSlugger from 'github-slugger';
import textContent from 'react-addons-text-content';

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
 * This component renders a design token table on a foundation/utility page.
 * @param {*} param0
 */
const UtilityPageTokenDisplay = ({
	heading,
	heading_level = 2,
	description = null,
	token_info = null,
	sub_tokens = null,
}) => {
	const slugger = new GithubSlugger();
	/**
	 * Helper to get a linked header. For cleanlyness below, this needs the current
	 * module text and utility module name in the scope, otherwise we would have
	 * just used markdown-heading.jsx. The reason we need the scope is that there
	 * may be multiple instances of this component on a page, so there will be
	 * duplicate headings. The slugger should keep track, but that would only work
	 * if all headings used the same slugger instance. This would mean we would need
	 * to make a react component/context/hook for it and I don't want to do that
	 * for just this. However, prolly needs to be done for regular content.
	 */
	const LinkedHeading = (level) => ({ children }) => {
		const text = children ? textContent(children) : '';
		const cleanHeading = text ? text.trim() : '';
		const sluggableText =
			cleanHeading === heading ? heading : `${heading}--${cleanHeading}`;
		const id = slugger.slug(sluggableText);

		const anchorLink = (
			<a id={id} href={`#${id}`} className="site-linked-header">
				{text}
			</a>
		);
		const headerEl = getHeaderEl(level, anchorLink);

		return headerEl;
	};

	const Heading = LinkedHeading(heading_level);

	return (
		<div className="usa-prose margin-bottom-4">
			<Heading>{heading}</Heading>
			<FrontmatterMarkdown content={description} />

			{sub_tokens &&
				sub_tokens.map((sub_token) => (
					<UtilityPageTokenDisplay
						heading_level={heading_level + 1}
						key={heading}
						{...sub_token}
					/>
				))}

			{/* This display is showing tokens vs being nested. */}
			{token_info && (
				<DesignTokenTableFactory
					designTokenDisplayComponent={
						token_info.design_token_display_component
					}
					designTokenDisplayParams={token_info.design_token_display_params}
				/>
			)}
		</div>
	);
};

UtilityPageTokenDisplay.propTypes = {
	heading: PropTypes.string,
	heading_level: PropTypes.number,
	description: PropTypes.string,
	design_token_display_component: PropTypes.string,
	design_token_display_params: PropTypes.object,
	sub_tokens: PropTypes.array,
	token_info: PropTypes.object,
};

export default UtilityPageTokenDisplay;
