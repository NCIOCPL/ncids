import React from 'react';
import PropType from 'prop-types';
import DangerouslySetHtmlContent from 'dangerously-set-html-content';

/**
 * This is a helper component to wrap a JS block with a script tag
 * in a way that will not offend the React to JSX String used in
 * Code.jsx. This ends up taking in a string as the children, which
 * seems to be serialized correctly. Then that string is set on the
 * html attribute (with the <script> tag.) At first, second and third
 * glance it was the < in the <script> tag that was breaking, but
 * who knows... this seems to work.
 * @param {Object} props the component props
 */
const ScriptWrapper = ({ children }) => (
	<DangerouslySetHtmlContent html={`<script>${children}</script>`} />
);

ScriptWrapper.propTypes = {
	children: PropType.string,
};

export default ScriptWrapper;
