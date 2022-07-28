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
					<label class="usa-sr-only" for="nci-header-search__field">
						Search
					</label>
					<input class="usa-input" id="nci-header-search__field" type="search" name="search" />
					${secondary}
					<div class="nci-header-search__overlay"></div>
				</form>
			</div>
		</div>

		<nav aria-label="Primary navigation" class="usa-nav">
			<div class="usa-nav__inner">
				<ul class="usa-nav__primary usa-accordion">
					<li class="usa-nav__primary-item">
						<button class="usa-accordion__button usa-nav__link" aria-expanded="false" aria-controls="extended-mega-nav-section-two">
							<span>&lt;Section&gt;</span>
						</button>
						<div id="extended-mega-nav-section-two" class="usa-nav__submenu usa-megamenu" hidden="">
							<div class="grid-row grid-gap-4">
								<div class="usa-col">
									<ul class="usa-nav__submenu-list">
										<li class="usa-nav__submenu-item">
											<a href="">
												&lt;Navigation link&gt;
											</a>
										</li>

										<li class="usa-nav__submenu-item">
											<a href="">
												&lt;Navigation link&gt;
											</a>
										</li>

										<li class="usa-nav__submenu-item">
											<a href="">
												&lt;Navigation link&gt;
											</a>
										</li>
									</ul>

								</div>
								<div class="usa-col">
									<ul class="usa-nav__submenu-list">
										<li class="usa-nav__submenu-item">
											<a href="">
												&lt;Navigation link&gt;
											</a>
										</li>

										<li class="usa-nav__submenu-item">
											<a href="">
												&lt;A very long navigation link that goes onto two lines&gt;
											</a>
										</li>

										<li class="usa-nav__submenu-item">
											<a href="">
												&lt;Navigation link&gt;
											</a>
										</li>
									</ul>

								</div>
								<div class="usa-col">
									<ul class="usa-nav__submenu-list">
										<li class="usa-nav__submenu-item">
											<a href="">
												&lt;Navigation link&gt;
											</a>
										</li>

										<li class="usa-nav__submenu-item">
											<a href="">
												&lt;Navigation link&gt;
											</a>
										</li>

										<li class="usa-nav__submenu-item">
											<a href="">
												&lt;Navigation link&gt;
											</a>
										</li>
									</ul>

								</div>
								<div class="usa-col">
									<ul class="usa-nav__submenu-list">
										<li class="usa-nav__submenu-item">
											<a href="">
												&lt;Navigation link&gt;
											</a>
										</li>

										<li class="usa-nav__submenu-item">
											<a href="">
												&lt;Navigation link&gt;
											</a>
										</li>

										<li class="usa-nav__submenu-item">
											<a href="">
												&lt;Navigation link&gt;
											</a>
										</li>
									</ul>

								</div>
							</div>
						</div>
					</li>
					<li class="usa-nav__primary-item">
						<a href="" class="usa-nav-link"><span>&lt;Simple link&gt;</span></a>
					</li>
				</ul>
			</div>
		</nav>

		<div class="nci-header-mobilenav__overlay" />
	</header>
`;

export const NCIExtendedDesktop2PrimaryItems = () => <TestCase css={css} html={html} />;
