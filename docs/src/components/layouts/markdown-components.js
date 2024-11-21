import React from 'react';

import Code from '../Code';
import TwigCode from '../TwigCode';
import NciDsJsInit from '../NciDsJsInit';
import { Tabs, TabItem } from '../Tabs';
import MarkdownHeader from '../markdown-heading';
import NciLink from '../nci-link';

// NOTE: A component list can be passed in so you do not need to
// import components in each MDX file.
// This comes in two parts:
// 1. overrides for Markdown elements (e.g. # -> h1 -> your heading class)
//    https://mdxjs.com/getting-started#table-of-components
// 2. Short codes for custom components
//    https://mdxjs.com/blog/shortcodes
// 3. Literal JSX tags are not processed by MDX, e.g. <a> is going to work
//		as just a regular link. See remark-mdx-disable-explicit-jsx for
//    options to work around this.
const markdownComponents = {
	a: NciLink,
	// inlineCode was removed in MDX-js v2, which was just for single ticks.
	// However, triple ticks are mapped to a pre that wraps a code block. So we can
	// clone the children of the pre adding a prop to indicate it is a code block.
	pre: (props) => {
		const newCodeChildren = React.Children.map(props.children, (child) => {
			return React.cloneElement(child, {
				isCodeBlock: true,
			});
		});

		return newCodeChildren;
	},
	code: ({ isCodeBlock = false, className, ...props }) => {
		if (!isCodeBlock) {
			return <code className="site-inline-code">{props.children}</code>;
		} else {
			if (className && className.endsWith('-nopreview')) {
				const cleanClassName = className.replace('-nopreview', '');

				return <Code className={cleanClassName} nopreview={true} {...props} />;
			} else if (className) {
				return <Code className={className} {...props} />;
			} else {
				return <Code {...props} />;
			}
		}
	},
	// table: Table,
	// Images should be placed in content and thus will be handled by gatsby-remark-images,
	// and won't get picked up here.
	// img: Image,
	// p: Paragraph,
	// hr: HorizontalRule,
	// blockquote: Blockquote,
	// h1: MarkdownHeader(1),
	h2: MarkdownHeader(2),
	h3: MarkdownHeader(3),
	h4: MarkdownHeader(4),
	// h5: MarkdownHeader(5),
	// h6: MarkdownHeader(6),
	// ul: List,
	// ol: List.withComponent('ol'),
	// dl: DescriptionList,
	// Shortcodes (https://mdxjs.com/blog/shortcodes)
	// Nesting Markdown in JSX components breaks the linter, so we will need to
	// use the Code component in those specific cases.
	Code,
	TwigCode,
	Tabs,
	TabItem,
	NciDsJsInit,
};

export default markdownComponents;
