import React from 'react';

import Code from '../Code';
import TwigCode from '../TwigCode';
import NciDsJsInit from '../NciDsJsInit';
import { Tabs, TabItem } from '../Tabs';
import MarkdownHeader from '../markdown-heading';

// NOTE: A component list can be passed in so you do not need to
// import components in each MDX file.
// This comes in two parts:
// 1. overrides for Markdown elements (e.g. # -> h1 -> your heading class)
//    https://mdxjs.com/getting-started#table-of-components
// 2. Short codes for custom components
//    https://mdxjs.com/blog/shortcodes
const markdownComponents = {
	// a: Link,
	pre: (props) => props.children,
	code: Code,
	inlineCode: (props) => (
		<code className="site-inline-code">{props.children}</code>
	),
	// table: Table,
	// img: Image,
	// p: Paragraph,
	// hr: HorizontalRule,
	// blockquote: Blockquote,
	// h1: MarkdownHeader(1),
	h2: MarkdownHeader(2),
	h3: MarkdownHeader(3),
	// h4: MarkdownHeader(4),
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
