import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-extended.scss';

import { nciImgLogo } from './nci-header-logo';
import { primary } from './nci-header-primary';
import { secondary } from './nci-header-secondary';

// language=HTML
const html = `
  <div class="nci-autocomplete__mobile-overlay"></div>  
	<header class="nci-header nci-header--extended">
		<div class="nci-header__navbar">
			${nciImgLogo}
			<div class="nci-header-nav__secondary">

				<button class="usa-button nci-header-mobilenav__open-btn">Menu</button>

				<form action="#" aria-label="Sitewide Search" class="nci-header-search" method="get" role="search">
          
          <div class="nci-autocomplete">
            <div class="nci-autocomplete__status" aria-live="assertive">10 suggestions found, use up and down arrows to review.</div>
            <label class="usa-sr-only" for="swKeyword">
              Search
            </label>
            <input 
            id="swKeyword"
            class="usa-input" 
            type="search" 
            name="search" 
            value="can"
            role="combobox"
            aria-autocomplete="both"
            aria-owns="suggestions"
            aria-activedescendant="" />
            ${secondary}
            <ul id="suggestions" role="listbox" class="nci-autocomplete__listbox" tabindex="-1">
              <li class="nci-autocomplete__option" tabindex="-1" role="option" id="res-0"><span aria-label="breast cancer">breast <strong>can</strong>cer</span></li>
              <li class="nci-autocomplete__option" tabindex="-1" role="option" id="res-1"><span aria-label="lung cancer">lung <strong>can</strong>cer</span></li>
              <li class="nci-autocomplete__option" tabindex="-1" role="option" id="res-2"><span aria-label="cervical cancer">cervical <strong>can</strong>cer</span></li>
              <li class="nci-autocomplete__option" tabindex="-1" role="option" id="res-3"><span aria-label="ovarian cancer">ovarian <strong>can</strong>cer</span></li>
              <li class="nci-autocomplete__option" tabindex="-1" role="option" id="res-4"><span aria-label="prostate cancer">prostate <strong>can</strong>cer</span></li>
              <li class="nci-autocomplete__option" tabindex="-1" role="option" id="res-5"><span aria-label="skin cancer">skin <strong>can</strong>cer</span></li>
              <li class="nci-autocomplete__option" tabindex="-1" role="option" id="res-6"><span aria-label="liver cancer">liver <strong>can</strong>cer</span></li>
              <li class="nci-autocomplete__option" tabindex="-1" role="option" id="res-7"><span aria-label="colon cancer">colon <strong>can</strong>cer</span></li>
              <li class="nci-autocomplete__option" tabindex="-1" role="option" id="res-8"><span aria-label="pancreatic cancer">pancreatic <strong>can</strong>cer</span></li>
              <li class="nci-autocomplete__option" tabindex="-1" role="option" id="res-9"><span aria-label="bone cancer">bone <strong>can</strong>cer</span></li>
            </ul>
          </div>
				</form>
			</div>
		</div>

		<nav aria-label="Primary navigation" class="nci-header-nav">
			<div class="nci-header-nav__inner">
				${primary}
			</div>
		</nav>
	</header>
  
`;

export const NCIExtendedMobileSitewideSearch = () => <TestCase css={css} html={html} />;
