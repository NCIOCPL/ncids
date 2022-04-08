
import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-extended.scss';
import { logo } from './nci-header-logo';
import { primaryActiveMega } from './nci-header-primary';
import { secondary } from './nci-header-secondary';

const html = `
<header class="nci-header nci-header--extended">
  <div class="nci-header__navbar">
		${logo}
  </div>

  <nav aria-label="Primary navigation" class="nci-header-nav">
    <div class="nci-header-nav__inner">
			${primaryActiveMega}
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
		<div class="nci-header-mobilenav__overlay" />
	</header>`;


export const NCIExtendedDesktopPrimaryActiveMegaMenu = () => <TestCase css={css} html={html} />;