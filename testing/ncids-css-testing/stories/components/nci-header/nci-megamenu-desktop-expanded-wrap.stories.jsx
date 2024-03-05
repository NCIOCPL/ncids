import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-header.scss';

import { nciImgLogo } from './nci-header-logo';
import { primaryActiveMegaAboutCancer } from './nci-header-primary';
import { secondary } from './nci-header-secondary';

// language=HTML
const html = `
	<header class="nci-header nci-header--megamenu">
		<div class="nci-header__navbar">
			${nciImgLogo}
			<div class="nci-header-nav__secondary">
				<button class="usa-button nci-header-mobilenav__open-btn">Menu</button>

				<form action="#" aria-label="Sitewide" class="nci-header-search" method="get" role="search">
					<label class="usa-sr-only" for="nci-header-search__field">
						Search
					</label>
					<input class="usa-input" id="nci-header-search__field" type="search" name="search" />
					${secondary}
				</form>
			</div>
		</div>

		<nav aria-label="Primary navigation" class="nci-header-nav">
			<div class="nci-header-nav__inner">
				${primaryActiveMegaAboutCancer}
			</div>
		</nav>
	</header>
`;

export const NCIMegaMenuDesktopPrimaryActiveMegaMenuWrap = () => (
	<TestCase css={css} html={html} />
);
