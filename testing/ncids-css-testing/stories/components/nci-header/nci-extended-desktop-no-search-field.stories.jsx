import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-extended.scss';

import { nciImgLogo } from './nci-header-logo';
import { primary } from './nci-header-primary';

// language=HTML
const html = `
	<header class="nci-header nci-header--extended">
		<div class="nci-header__navbar">
			${nciImgLogo}
			<div class="nci-header-nav__secondary">
				<button class="usa-button nci-header-mobilenav__open-btn">Menu</button>
			</div>
		</div>

		<nav aria-label="Primary navigation" class="nci-header-nav">
			<div class="nci-header-nav__inner">
				${primary}
			</div>
		</nav>
	</header>
`;

export const NCIExtendedDesktopNoSearchField = () => (
	<TestCase css={css} html={html} />
);
