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
				<li><a href="http://www.cancer.gov" class="nci-cta-strip__button">El NCI para la Nanotecnología en el Cáncer</a></li>
				<li><a href="http://www.google.com/" class="nci-cta-strip__button">Laboratorio de Caracterización de Nanotecnología</a></li>
				<li><a href="http://www.cancer.gov" class="nci-cta-strip__button">Plan de Nanotecnología del Cáncer</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>
`;

export const DefaultSpanish = () => (
	<TestCase css={css} html={html} />
);
