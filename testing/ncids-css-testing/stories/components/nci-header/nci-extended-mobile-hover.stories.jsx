
import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-extended.scss';
import { logo } from './nci-header-logo';
import { primary } from './nci-header-primary';
import { secondary } from './nci-header-secondary';
import { mobileHover } from './nci-header-mobile';

const html = `
<header class="nci-header nci-header--extended">
  <div class="nci-header__navbar">
		${logo}
  </div>

  <nav aria-label="Primary navigation" class="nci-header-nav">
    <div class="nci-header-nav__inner">
			${primary}
			<button class="nci-header-mobilenav__open-btn">Menu</button>
			<div class="nci-header-nav__secondary">

				<form 
					action="#" 
					aria-label="Sitewide"
					class="nci-header-search" 
					method="get" 
					role="search"
				>
					<label class="usa-sr-only" for="extended-mega-search-field-en-small">
						Search
					</label>
					<input
						class="usa-input"
						id="nci-header-search__field"
						type="search"
						name="search"
					/>
						${secondary}
					<div class="nci-header-search__overlay"></div>
				</form>

      </div>
    </div>
  </nav>
	${mobileHover}
	<div class="nci-header-mobilenav__overlay active" />
</header>`;

export const NCIExtendedMobileHover= () => <TestCase css={css} html={html} />;