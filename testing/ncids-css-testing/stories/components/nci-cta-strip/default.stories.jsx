import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-cta-strip.scss';

// language=HTML
const html = `
<div class="usa-section usa-section--dark">
	<div class="grid-container">
		<ul class="nci-cta-strip">
			<li><a href="http://www.cancer.gov" class="usa-button">Programs</a></li>
			<li><a href="http://www.google.com/" class="usa-button">Resources</a></li>
			<li><a href="http://www.cancer.gov" class="usa-button">Success Stories</a></li>
		</ul>
	</div>
</div>
`;

export const Default = () => (
	<TestCase css={css} html={html} />
);
