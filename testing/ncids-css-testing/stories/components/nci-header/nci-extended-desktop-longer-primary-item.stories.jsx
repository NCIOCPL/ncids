import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-extended.scss';

import { nciImgLogo } from './nci-header-logo';
import { secondary } from './nci-header-secondary';

// language=HTML
const html = `
	<header class="nci-header nci-header--extended">
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
				<ul class="nci-header-nav__primary">
					<li class="nci-header-nav__primary-item">
						<a href="/" class="nci-header-nav__primary-button"
							 aria-expanded="false"
							 aria-controls="megamenu-layer">
							<span>Current section with longer title</span>
						</a>
					</li>
					<li class="nci-header-nav__primary-item">
						<a href="/" class="nci-header-nav__primary-button"
							 aria-expanded="false"
							 aria-controls="megamenu-layer">
							<span>Second Section</span>
						</a>
					</li>
					<li class="nci-header-nav__primary-item">
						<a href="/" class="nci-header-nav__primary-button"
							 aria-expanded="false"
							 aria-controls="megamenu-layer">
							<span>Third Section</span>
						</a>
					</li>
					<li class="nci-header-nav__primary-item">
						<a href="/" class="nci-header-nav__primary-button"
							 aria-expanded="false"
							 aria-controls="megamenu-layer">
							<span>Fourth Section</span>
						</a>
					</li>
					<li class="nci-header-nav__primary-item">
						<a href="/" class="nci-header-nav__primary-button"
							 aria-expanded="false"
							 aria-controls="megamenu-layer">
							<span>Fifth Section</span>
						</a>
					</li>
					<li class="nci-header-nav__primary-item">
						<a href="/" class="nci-header-nav__primary-button"
							 aria-expanded="false"
							 aria-controls="megamenu-layer">
							<span>Sixth Section</span>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	</header>
`;

export const NCIExtendedDesktopLongerPrimaryItem = () => (
	<TestCase css={css} html={html} />
);
