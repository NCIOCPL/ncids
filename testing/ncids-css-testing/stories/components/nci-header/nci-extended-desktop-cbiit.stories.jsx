import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-extended.scss';

import { cbiittSvgLogo } from './nci-header-logo';
import { primary } from './nci-header-primary';
import { secondary } from './nci-header-secondary';

// language=HTML
const html = `
	<header class="nci-header nci-header--extended">
		<div class="nci-header__navbar">
			${cbiittSvgLogo}
			<div class="nci-header-nav__secondary">
				<button class="usa-button nci-header-mobilenav__open-btn">Menu</button>

				<form class="nci-header-search" role="search">
					<label class="usa-sr-only" for="extended-mega-search-field-en-small">
						Search
					</label>
					<input class="usa-input" id="nci-header-search__field" type="search" name="search" />
					${secondary}
					<div class="nci-header-search__overlay"></div>
				</form>
			</div>
		</div>

		<nav aria-label="Primary navigation" class="nci-header-nav">
			<div class="nci-header-nav__inner">
				${primary}
			</div>
		</nav>
		<div class="nci-header-mobilenav__overlay" />
	</header>
`;

export const NCIExtendedDesktopCBIITLogo = () => (
	<TestCase css={css} html={html} />
);
