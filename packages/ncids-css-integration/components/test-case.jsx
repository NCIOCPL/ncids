import React from 'react';
import root from 'react-shadow';
import { Helmet } from 'react-helmet';
import fonts from '!!raw-loader!sass-loader!./settings-typography.scss';

/**
 * Test case component to render html string inside of a shadow
 * dom with the CSS of the passed in Sass.
 */
export const TestCase = ({ sass, html }) => {
	return (
		<>
			<root.div>
				<Helmet>
					<script>console.log('foo');</script>
					<style type="text/css">{fonts}</style>
				</Helmet>
				<style type="text/css">{sass}</style>
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</root.div>
		</>
	);
};
