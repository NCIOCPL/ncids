import React from 'react';
import PropTypes from 'prop-types';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import MarkdownHeader from './markdown-heading';
import NciLink from './nci-link';

/**
 * Helper to render out a markdown formatted frontmatter property
 * @param {string} content the markdown to render.
 * @returns
 */
const FrontmatterMarkdown = ({ content }) => {
	const MarkdownComponents = {
		h2: MarkdownHeader(2),
		h3: MarkdownHeader(3),
		a: NciLink,
		code: ({ children }) => (
			<code className="site-inline-code">{children}</code>
		),
	};

	if (!content || String(content).trim() === '') {
		return <></>;
	} else {
		return (
			<ReactMarkdown
				components={MarkdownComponents}
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[rehypeRaw]}>
				{content}
			</ReactMarkdown>
		);
	}
};

FrontmatterMarkdown.propTypes = {
	content: PropTypes.string,
};

export default FrontmatterMarkdown;
