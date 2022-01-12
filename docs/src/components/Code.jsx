// Note this code was borrowed heavily from Github's Primer documentations site.
// https://github.com/primer/doctocat
import React from 'react';
import PropType from 'prop-types';
import CopyToClipboard from './CopyToClipboard';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { LivePreview, LiveError, LiveProvider } from 'react-live';
import htmlReactParser from 'html-react-parser';
import reactElementToJsxString from 'react-element-to-jsx-string';
import codePreviewScope from '../code-preview-scope';
import theme from 'prism-react-renderer/themes/palenight';

const codeTransformers = {
	html: (html) => htmlToJsx(html),
	jsx: (jsx) => `<React.Fragment>${jsx}</React.Fragment>`,
};

const removeNewlines = (string) => string.replace(/(\r\n|\n|\r)/gm, '');
const wrapWithFragment = (jsx) => `<React.Fragment>${jsx}</React.Fragment>`;

const htmlToJsx = (html) => {
	try {
		const reactElement = htmlReactParser(removeNewlines(html));
		// The output of htmlReactParser could be a single React element
		// or an array of React elements. reactElementToJsxString does not accept arrays
		// so we have to wrap the output in React fragment.
		return reactElementToJsxString(<>{reactElement}</>);
	} catch (error) {
		return wrapWithFragment(html);
	}
};

/**
 * This is a helper function to render the Code Preview.
 *
 * With the LiveProvider, which sets up the context for the code, The scope
 * is basically all the import statements for any components you reference
 * in the .mdx files. The scope has been setup to import * from ncids
 * react. If your preview fails for some reason, make sure the referenced
 * component is actually exported in the root index.js|ts.
 * The codeTransformers object is what is used to transpile the code into
 * actual dom element. (e.g. JSX string -> React.Fragment.)
 *
 * @param {string} language the language for the code block (html or jsx)
 * @param {string} code the source code that you want to display
 * @returns LiveProvider
 */
const getPreview = (language, code) => (
	<>
		<h3>Preview</h3>
		<LiveProvider
			scope={codePreviewScope}
			code={code}
			transformCode={codeTransformers[language]}>
			<LiveError />
			<LivePreview />
		</LiveProvider>
	</>
);

const Code = ({ className = '/language-/js', nopreview = false, children }) => {
	const language = className ? className.replace(/language-/, '') : '';
	const code = children.trim();
	return (
		<>
			{!nopreview && codeTransformers[language] && getPreview(language, code)}
			<h3>Code</h3>
			<Highlight
				{...defaultProps}
				theme={theme}
				code={code}
				language={language}>
				{({ className, style, tokens, getLineProps, getTokenProps }) => (
					<div>
						<CopyToClipboard value={code} />
						<pre className={className} style={style}>
							{tokens.map((line, i) => (
								<div key={i} {...getLineProps({ line, key: i })}>
									{line.map((token, key) => (
										<span key={key} {...getTokenProps({ token, key })} />
									))}
								</div>
							))}
						</pre>
					</div>
				)}
			</Highlight>
		</>
	);
};

Code.propTypes = {
	className: PropType.string,
	nopreview: PropType.bool,
	children: PropType.string,
};
export default Code;
