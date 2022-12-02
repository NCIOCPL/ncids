import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-standard.scss';

// language=HTML
const html = `
	<section
		aria-label="Standard info site alert expanded with close button example"
		class="usa-site-alert usa-site-alert--nci-standard usa-site-alert--nci-info"
		id="site-alert--nci-info"
	>
		<div class="usa-alert">
			<div class="usa-alert__body">
				<div class="usa-alert__nci-header">
					<h3 class="usa-alert__heading">COVID-19 resources.</h3>
					<button
						class="usa-alert__nci-button usa-alert__nci-button--toggle"
						aria-expanded="true"
						aria-controls="site-alert-collapse"
						aria-label="Expand alert message"
					>
						<svg class="usa-icon" role="img" aria-hidden="true" viewBox="0 0 64 39">
              <path fill="currentColor" d="M.655 34.187c-.427-.437-.64-.937-.64-1.503 0-.566.213-1.067.64-1.502L30.542.756c.427-.436.918-.653 1.474-.653.555 0 1.048.218 1.474.653l29.884 30.426c.428.435.642.936.642 1.502s-.213 1.066-.642 1.501l-3.206 3.265c-.427.436-.919.653-1.475.653-.555 0-1.047-.217-1.475-.653L32.016 11.79 6.81 37.45c-.427.436-.919.653-1.474.653-.556 0-1.048-.217-1.475-.653L.655 34.187z"></path>
            </svg>
					</button>
				</div>
				<div class="usa-alert__nci-content" id="site-alert-content" aria-hidden="false">
					<ul class="usa-alert__nci-list">
						<li>
							<a class="usa-link" href="javascript:void(0);">
								What people with cancer should know
							</a>
						</li>
						<li>
							<a class="usa-link" href="javascript:void(0);">
								Get the latest public health information from CDC
							</a>
						</li>
						<li>
							<a class="usa-link" href="javascript:void(0);">
								Guidance for cancer researchers
							</a>
						</li>
						<li>
							<a class="usa-link" href="javascript:void(0);">
								Get the latest research information from NIH
							</a>
						</li>
					</ul>
				</div>
			</div>
			<button
				class="usa-alert__nci-button usa-alert__nci-button--close"
				aria-label="Dismiss standard emergency expanded alert"
			>
				<svg class="usa-icon" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M0 13.0332964L13.0332964 0M13.0332964 13.0332964L0 0" transform="translate(1 1)"></path>
        </svg>
			</button>
		</div>
	</section>
`;

export const NCIStandardInfoExpandedWithClose = () => (
	<TestCase css={css} html={html} />
);
