import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-banner.scss';

const html = `
<section class="usa-banner usa-banner--nci-banner" aria-label="Official government website">
	<header class="usa-banner__header">
		<div class="usa-banner__inner">
			<div class="usa-banner__header-text">
				An official website of the United States government
			</div>
		</div>
	</header>
</section>
`;

export const NCIBanner = () => <TestCase css={css} html={html} />;
