import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-slim.scss';

// language=HTML
const html = `
	<section
		aria-label="Slim informational site alert with close button example"
		class="usa-site-alert usa-site-alert--nci-slim usa-site-alert--nci-info"
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
			<button
				class="usa-alert__nci-button usa-alert__nci-button--close"
				aria-label="Dismiss slim info alert"
			>
				<svg class="usa-icon" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M0 13.0332964L13.0332964 0M13.0332964 13.0332964L0 0" transform="translate(1 1)"></path>
        </svg>
			</button>
		</div>
	</section>
`;

export const NCISlimInfoWithClose = () => <TestCase css={css} html={html} />;
