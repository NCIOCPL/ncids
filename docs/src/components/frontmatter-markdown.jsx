import React from 'react';
import PropTypes from 'prop-types';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { withPrefix } from 'gatsby-link';

import MarkdownHeader from './markdown-heading';

/**
 * Helper to render out a markdown formatted frontmatter property
 * @param {string} content the markdown to render.
 * @returns
 */
const FrontmatterMarkdown = ({ content }) => {
	/**
	 * Helper method to take site root links (e.g., /foo) and prepend the
	 * url with the pathPrefix passed to Gatsby.
	 * @param {string} href the url to update.
	 * @returns fixed URL
	 */
	const prefixSiteRootLinks = (href) => {
		return href.startsWith('/') ? withPrefix(href) : href;
	};

	const MarkdownComponents = {
		h2: MarkdownHeader(2),
		h3: MarkdownHeader(3),
		a: ({ href, children }) => (
			<a href={prefixSiteRootLinks(href)}>{children}</a>
		),
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
