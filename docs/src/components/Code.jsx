// Note this code was borrowed heavily from Github's Primer documentations site.
// https://github.com/primer/doctocat
import React, { useState } from 'react';
import PropType from 'prop-types';
import CopyToClipboard from './CopyToClipboard';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { LivePreview, LiveError, LiveProvider } from 'react-live';
import codePreviewScope from '../code-preview-scope';
import htmlReactParser from 'html-react-parser';
import theme from 'prism-react-renderer/themes/palenight';
import ScriptWrapper from './ScriptWrapper';

const removeNewlines = (string) => string.replace(/(\r\n|\n|\r)/gm, '');
const wrapWithFragment = (jsx) => `<React.Fragment>${jsx}</React.Fragment>`;

const htmlToJsx = (html, previewId) => {
	// So we need a way in HTML to wireup the NCIDS-JS code when previewing HTML
	// for those dynamic components. So we made a little component that allows
	// us to add JS to an MDX page. The problem is that the elements are not in
	// the DOM until the page is rendered by react (in dev mode). So we are going to
	// raise an event that will let the MDX writer when it is time to wire up
	// their components.
	const previewDisplayedEvent = `
		(function(){
			const target = document.getElementById('${previewId}');
			target.dispatchEvent(new Event('NCIDS:Preview', { bubbles: true }));
		})();
	`;

	try {
		const reactElement = htmlReactParser(removeNewlines(html));
		// The output of htmlReactParser could be a single React element
		// or an array of React elements. reactElementToJsxString does not accept arrays
		// so we have to wrap the output in React fragment.
		return (
			<>
				{reactElement}
				<ScriptWrapper>{`${previewDisplayedEvent}`}</ScriptWrapper>
			</>
		);
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
 *
 * The codeTransformers object is what is used to transpile the code into
 * actual dom element. (e.g. JSX string -> React.Fragment.)
 *
 * I don't like this here, but multiple things need the transformers, and
 * the HTML transformer needs the preview ID.
 *
 * @returns LiveProvider
 */
const getPreview = (language, code, previewId) => {
	switch (language) {
		case 'html': {
			return (
				<>
					<h3>Preview</h3>
					<div id={previewId}>{htmlToJsx(code, previewId)}</div>
				</>
			);
		}
		case 'jsx': {
			return (
				<>
					<h3>Preview</h3>
					<LiveProvider
						scope={codePreviewScope}
						code={code}
						transformCode={wrapWithFragment}>
						<LiveError />
						<LivePreview id={previewId} />
					</LiveProvider>
				</>
			);
		}
	}
};

const Code = ({ className = '/language-/js', nopreview = false, children }) => {
	const language = className ? className.replace(/language-/, '') : '';
	const code = children.trim();
	const [previewId] = useState(
		'preview-' + Math.random().toString(36).substr(2, 9)
	);

	return (
		<>
			{!nopreview &&
				(language === 'jsx' || language === 'html') &&
				getPreview(language, code, previewId)}
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
