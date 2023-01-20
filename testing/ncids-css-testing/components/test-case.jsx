import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * Test case component to render html string inside of a shadow
 * dom with the CSS of the passed in Sass.
 */
export const TestCase = ({ css, html }) => {
	return (
		<>
			<Helmet>
				{/* todo add scripts to preview */}
				{/*<script>console.log('foo');</script>*/}
			</Helmet>
			<style type="text/css">{css}</style>
			<div dangerouslySetInnerHTML={{ __html: html }} />
		</>
	);
};
