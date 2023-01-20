import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './usa-site-alert.scss';

// language=HTML
const html = `
	<section
		aria-label="Slim emergency site alert example"
		class="usa-site-alert usa-site-alert--nci-slim usa-site-alert--nci-emergency"
	>
		<div class="usa-alert">
			<div class="usa-alert__body">
				<div class="usa-alert__nci-header">
					<div class="usa-alert__text">
						<strong>Short alert message.</strong> Additional context and followup
						information including
						<a class="usa-link" href="javascript:void(0);">a link</a>.
					</div>
				</div>
			</div>
		</div>
	</section>
`;

export const NCISlimEmergency = () => <TestCase css={css} html={html} />;
