import React from 'react';
import root from 'react-shadow';
import { Helmet } from 'react-helmet';

/**
 * Test case component to render html string inside of a shadow
 * dom with the CSS of the passed in Sass.
 */
export const TestCase = ({ sass, html }) => {
	return (
		<>
			<root.div>
				<style type="text/css">{sass}</style>
				<Helmet>
					<script>console.log('foo');</script>
				</Helmet>
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</root.div>
		</>
	);
};
