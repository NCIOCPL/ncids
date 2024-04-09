import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-header.scss';

import { nciImgLogo } from './nci-header-logo';
import { primary } from './nci-header-primary';
import { secondary } from './nci-header-secondary';

// language=HTML
const html = `
	<header class="nci-header">
		<div class="nci-header__navbar">
			${nciImgLogo}
			<div class="nci-header-nav__secondary">
				<button class="usa-button nci-header-mobilenav__open-btn">Menu</button>
				<form action="#" aria-label="Sitewide" class="nci-header-search" method="get" role="search">
					<div class="nci-autocomplete">
            <div class="nci-autocomplete__status" aria-live="assertive"></div>
						<label class="usa-sr-only" for="nci-header-search__field">
							Search
						</label>
						<input class="usa-input" id="nci-header-search__field" type="search" name="search" role="combobox" aria-autocomplete="list" aria-owns="nci-header-search__field-terms" aria-activedescendant="" />
            ${secondary}
            <div id="nci-header-search__field-termswrapper" class="nci-autocomplete__listbox">
              <div id="nci-header-search__field-terms" tabindex="-1" role="listbox"></div>
            </div>
          </div>
				</form>
			</div>
		</div>

		<nav aria-label="Primary navigation" class="nci-header-nav">
			<div class="nci-header-nav__inner">
				${primary}
			</div>
		</nav>
	</header>`;

export const NCIHeaderDesktopSearch = () => (
	<TestCase css={css} html={html} />
);
