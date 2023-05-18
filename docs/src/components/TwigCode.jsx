import React from 'react';
import PropType from 'prop-types';
import Code from './Code';
import parserHtml from 'prettier/parser-html';
import prettier from 'prettier/standalone';
import getTwigTemplate from '../get-twig-template';

const TwigCode = ({ templatePath, json, ...addlProps }) => {
	// Parse children as JSON.
	const data = json ? JSON.parse(json) : {};
	// Load the twig template.
	const template = getTwigTemplate(templatePath);
	// Render the template using the data.
	const html = template.bind({})(data);

	// Send the HTML off to prettier. This helps clean up extra whitespace that
	// the twig markup will introduce.
	const formattedHtml = prettier.format(html, {
		parser: 'html',
		plugins: [parserHtml],
	});

	return (
		<Code className="language-html" {...addlProps}>
			{formattedHtml}
		</Code>
	);
};

TwigCode.propTypes = {
	templatePath: PropType.string,
	json: PropType.string,
};

export default TwigCode;
