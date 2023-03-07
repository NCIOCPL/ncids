import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-guide-card.scss';

const html = `
<div id="nci-card" class="grid-container">

	<div class="nci-guide-card desktop:grid-col-4">
		<div class="nci-guide-card__wrapper">
			<div class="nci-guide-card__body">
				<h2 class="nci-guide-card__title">Research Grant Funding</h2>
				<ul class="nci-card__button-group">
					<li><a href="#" class="usa-button usa-button--outline usa-button--secondary">Funding Opportunities</a></li>
					<li><a href="#" class="usa-button usa-button--outline usa-button--secondary">Cancer Moonshot Funding Opportunities</a></li>
					<li><a href="#" class="usa-button usa-button--outline usa-button--secondary">Funding Strategy</a></li>
					<li><a href="#" class="usa-button usa-button--outline usa-button--secondary">Research Program Contacts</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>
`;

export const Default = () => <TestCase css={css} html={html} />;
