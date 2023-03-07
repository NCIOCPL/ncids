import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-cta-strip.scss';

// language=HTML
const html = `
<section class="usa-section usa-section--dark usa-section--nci-cta-strip">
	<div class="grid-container">
		<ul class="nci-cta-strip" aria-label="Llamada a la acción">
			<li><a href="http://www.cancer.gov" class="usa-button">El NCI para la Nanotecnología en el Cáncer</a></li>
			<li><a href="http://www.google.com/" class="usa-button">Laboratorio de Caracterización de Nanotecnología</a></li>
			<li><a href="http://www.cancer.gov" class="usa-button">Plan de Nanotecnología del Cáncer</a></li>
		</ul>
	</div>
</section>
`;

export const DefaultSpanish = () => (
	<TestCase css={css} html={html} />
);
