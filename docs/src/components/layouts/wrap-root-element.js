import React from 'react';
import Code from '../Code';
import NciDsJsInit from '../NciDsJsInit';
import { Tabs, TabItem } from '../Tabs';

import { MDXProvider } from '@mdx-js/react';

// NOTE: A component list can be passed in so you do not need to
// import components in each MDX file.
// This comes in two parts:
// 1. overrides for Markdown elements (e.g. # -> h1 -> your heading class)
//    https://mdxjs.com/getting-started#table-of-components
// 2. Short codes for custom components
//    https://mdxjs.com/blog/shortcodes
const components = {
	// a: Link,
	// pre: props => props.children,
	code: Code,
	// inlineCode: InlineCode,
	// table: Table,
	// img: Image,
	// p: Paragraph,
	// hr: HorizontalRule,
	// blockquote: Blockquote,
	// h1: H1,
	// h2: H2,
	// h3: H3,
	// h4: H4,
	// h5: H5,
	// h6: H6,
	// ul: List,
	// ol: List.withComponent('ol'),
	// dl: DescriptionList,
	// Shortcodes (https://mdxjs.com/blog/shortcodes)
	// Nesting Markdown in JSX components breaks the linter, so we will need to
	// use the Code component in those specific cases.
	Code,
	Tabs,
	TabItem,
	NciDsJsInit,
};

function wrapRootElement({ element }) {
	return <MDXProvider components={components}>{element}</MDXProvider>;
}

export default wrapRootElement;
