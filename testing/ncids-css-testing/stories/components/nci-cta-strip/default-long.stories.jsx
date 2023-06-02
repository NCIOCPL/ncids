import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-cta-strip.scss';

// language=HTML
const html = `
<section class="usa-section usa-section--dark">
	<div class="grid-container">
		<ul class="nci-cta-strip">
			<li><a href="http://www.cancer.gov" class="usa-button">NCI Alliance for Nanotechnology in Cancer</a></li>
			<li><a href="http://www.google.com/" class="usa-button">Nanotechnology Characterization Laboratory</a></li>
			<li><a href="http://www.cancer.gov" class="usa-button">Cancer Nanotechnology Plan</a></li>
		</ul>
	</div>
</section>
`;

export const DefaultLong = () => (
	<TestCase css={css} html={html} />
);
