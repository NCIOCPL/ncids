import React from 'react';
import { TestCase } from '../../../../../../components/test-case';
import css from '../../fonts.scss';

const html = `
<section class="usa-section">
	<div class="grid-container">
		<h1 class="nci-heading-display">nci-heading-display</h1>
		<h1 class="nci-heading-h1">nci-heading-h1</h1>
		<h2 class="nci-heading-h2">nci-heading-h2</h2>
		<h3 class="nci-heading-h3">nci-heading-h3</h3>
		<h4 class="nci-heading-h4">nci-heading-h4</h4>
		<h5 class="nci-heading-h5">nci-heading-h5</h5>
		<h6 class="nci-heading-h6">nci-heading-h6</h6>
		<h1 class="nci-heading-h1 nci-heading--label">nci-heading-h1 nci-heading--label</h1>
		<h2 class="nci-heading-h2 nci-heading--label">nci-heading-h2 nci-heading--label</h2>
		<h3 class="nci-heading-h3 nci-heading--label">nci-heading-h3 nci-heading--label</h3>
		<h4 class="nci-heading-h4 nci-heading--label">nci-heading-h4 nci-heading--label</h4>
		<h5 class="nci-heading-h5 nci-heading--label">nci-heading-h5 nci-heading--label</h5>
		<h6 class="nci-heading-h6 nci-heading--label">nci-heading-h6 nci-heading--label</h6>
	</div>
</section>
`;

export const NciHeading = () => <TestCase css={css} html={html} />;
