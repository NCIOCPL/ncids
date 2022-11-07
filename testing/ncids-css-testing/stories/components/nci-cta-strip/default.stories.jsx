import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-cta-strip.scss';

// language=HTML
const html = `
<div class="nci-cta-strip">
	<div class="grid-container">
		<div class="grid-row grid-gap">
			<div class="grid-col">
				<ul>
					<li><a href="http://www.cancer.gov" class="nci-cta-strip__button">Programs</a></li>
					<li><a href="http://www.google.com/" class="nci-cta-strip__button">Resources</a></li>
					<li><a href="http://www.cancer.gov" class="nci-cta-strip__button">Success Stories</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>
`;

export const Default = () => (
	<TestCase css={css} html={html} />
);
