import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-extended.scss';

import { nciImgLogo } from './nci-header-logo';
import { primary } from './nci-header-primary';
import { secondary } from './nci-header-secondary';

// language=HTML
const html = `
	<header class="nci-header nci-header--extended">
		<div class="nci-header__navbar">
			${nciImgLogo}
			<div class="nci-header-nav__secondary">
      <button class="usa-button nci-header-mobilenav__open-btn">Menu</button>

				<form action="#" aria-label="Sitewide" class="nci-header-search" method="get" role="search">
					<div class="nci-autocomplete">
            <div class="nci-autocomplete__status" aria-live="assertive">10 suggestions found, use up and down arrows to review</div>
						<label class="usa-sr-only" for="nci-header-search__field">
							Search
						</label>
						<input class="usa-input" id="nci-header-search__field" type="search" name="search" role="combobox" aria-autocomplete="list" aria-owns="nci-header-search__field-terms" aria-activedescendant="" value="cancer" />
            ${secondary}
					  <div id="nci-header-search__field-termswrapper" class="nci-autocomplete__listbox listboxWidth active">
              <div id="nci-header-search__field-terms" tabindex="-1" role="listbox">
                <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="0" aria-setsize="10" id="term-0"><span aria-label="breast cancer">breast <mark>cancer</mark></span></div>
                <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="1" aria-setsize="10" id="term-1"><span aria-label="lung cancer">lung <mark>cancer</mark></span></div>
                <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="2" aria-setsize="10" id="term-2"><span aria-label="cervical cancer">cervical <mark>cancer</mark></span></div>
                <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="3" aria-setsize="10" id="term-3"><span aria-label="ovarian cancer">ovarian <mark>cancer</mark></span></div>
                <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="4" aria-setsize="10" id="term-4"><span aria-label="prostate cancer">prostate <mark>cancer</mark></span></div>
                <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="5" aria-setsize="10" id="term-5"><span aria-label="skin cancer">skin <mark>cancer</mark></span></div>
                <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="6" aria-setsize="10" id="term-6"><span aria-label="liver cancer">liver <mark>cancer</mark></span></div>
                <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="7" aria-setsize="10" id="term-7"><span aria-label="colon cancer">colon <mark>cancer</mark></span></div>
                <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="8" aria-setsize="10" id="term-8"><span aria-label="pancreatic cancer">pancreatic <mark>cancer</mark></span></div>
                <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="9" aria-setsize="10" id="term-9"><span aria-label="bone cancer">bone <mark>cancer</mark></span></div>
              </div>
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
		</div>
	</header>`;

export const NCIExtendedDesktopSearchClear = () => (
	<TestCase css={css} html={html} />
);
