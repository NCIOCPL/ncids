import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-cta-strip.scss';

// language=HTML
const html = `
<section class="usa-section usa-section--dark usa-section--nci-cta-strip">
	<div class="grid-container">
		<ul class="nci-cta-strip" aria-label="Call to action">
			<li><a href="http://www.cancer.gov" class="usa-button">Programs</a></li>
			<li><a href="http://www.google.com/" class="usa-button">Resources</a></li>
			<li><a href="http://www.cancer.gov" class="usa-button">Success Stories</a></li>
		</ul>
	</div>
</section>
`;

export const Default = () => (
	<TestCase css={css} html={html} />
);
