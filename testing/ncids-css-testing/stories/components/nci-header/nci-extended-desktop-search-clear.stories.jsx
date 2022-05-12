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
				<form class="nci-header-search" role="search">
					<label class="usa-sr-only" for="extended-mega-search-field-en-small">
						Search
					</label>
					<input class="usa-input" id="nci-header-search__field" type="search" name="search"
								 style="border-right:1px solid #1b1b1b;" value="Cancer">
					<div class="nci-header-search__overlay"></div>
					<a class="usa-link search-button__cancel" href="#">Cancel</a>
				</form>
			</div>
		</div>

		<nav aria-label="Primary navigation" class="nci-header-nav">
			<div class="nci-header-nav__inner">
				${primary}
			</div>
		</nav>
		<div class="nci-header-search__mobile-overlay">
		</div>
		<div class="nci-header-mobilenav__overlay" />
	</header>`;

export const NCIExtendedDesktopSearchClear = () => (
	<TestCase css={css} html={html} />
);
