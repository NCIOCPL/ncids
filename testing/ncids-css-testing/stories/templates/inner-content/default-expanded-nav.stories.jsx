import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './inner-content.scss';

import nciDesktop from '../../components/nci-header/img/logo_NCI.svg';
import nciMobile from '../../components/nci-header/img/logo_NCI_mobile.svg';

import { primaryActiveMega } from '../../components/nci-header/nci-header-primary';
import { secondary } from '../../components/nci-header/nci-header-secondary';
import mainContent from './main-content';

// language=HTML
const html = `
	<a class="usa-skipnav" href="#main-content">Skip to main content</a>
	<section class="usa-banner usa-banner--nci-banner" aria-label="Official government website">
		<header class="usa-banner__header">
			<div class="usa-banner__inner">
				<div class="usa-banner__header-text">
					An official website of the United States government
				</div>
				<a href="/" class="usa-button usa-button--nci-small">Español</a>
			</div>
		</header>
	</section>

	<div class="notifications-area">
		<section
			aria-label="Standard info site alert collapsed with close example"
			class="usa-site-alert usa-site-alert--nci-standard usa-site-alert--nci-info hidden"
			id="site-alert--nci-info"
		>
			<div class="usa-alert">
				<div class="usa-alert__body">
					<div class="usa-alert__nci-header">
						<h3 class="usa-alert__heading">COVID-19 resources.</h3>
						<button class="usa-alert__nci-button usa-alert__nci-button--toggle" aria-expanded="false" aria-controls="gov-banner-default" aria-label="Expand alert message">
							<svg class="usa-icon" role="img" aria-hidden="true" viewBox="0 0 64 39">
								<path fill="currentColor" d="M.655 34.187c-.427-.437-.64-.937-.64-1.503 0-.566.213-1.067.64-1.502L30.542.756c.427-.436.918-.653 1.474-.653.555 0 1.048.218 1.474.653l29.884 30.426c.428.435.642.936.642 1.502s-.213 1.066-.642 1.501l-3.206 3.265c-.427.436-.919.653-1.475.653-.555 0-1.047-.217-1.475-.653L32.016 11.79 6.81 37.45c-.427.436-.919.653-1.474.653-.556 0-1.048-.217-1.475-.653L.655 34.187z"></path>
							</svg>
						</button>
					</div>
				</div>
				<button class="usa-alert__nci-button usa-alert__nci-button--close" aria-label="Dismiss standard info alert">
					<svg class="usa-icon" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
						<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M0 13.0332964L13.0332964 0M13.0332964 13.0332964L0 0" transform="translate(1 1)"></path>
					</svg>
				</button>
			</div>
		</section>
	</div>

	<header class="nci-header nci-header--extended">
		<div class="nci-header__navbar">
			<div class="nci-logo">
        <a href="#" aria-label="Homepage">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcset="${nciDesktop}">
            <img src="${nciMobile}"  alt="" />
          </picture>
        </a>
			</div>

			<div class="nci-header-nav__secondary">
				<button class="usa-button nci-header-mobilenav__open-btn">Menu</button>

				<form class="nci-header-search" role="search">
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
				${primaryActiveMega}
			</div>
		</nav>
	</header>

	<div class="grid-container">
		<div class="grid-row flex-no-wrap">
			<div class="grid-col-10">
				<nav class="usa-breadcrumb usa-breadcrumb--wrap" aria-label="Default Breadcrumbs Example">
					<ol class="usa-breadcrumb__list">
						<li class="usa-breadcrumb__list-item">
							<a href="#" class="usa-breadcrumb__link">
								<span>Home</span>
							</a>
						</li>
						<li class="usa-breadcrumb__list-item">
							<a href="#" class="usa-breadcrumb__link">
								<span>About NCI</span>
							</a>
						</li>
						<li class="usa-breadcrumb__list-item">
							<a href="#" class="usa-breadcrumb__link">
								<span>NCI Organization</span>
							</a>
						</li>
						<li class="usa-breadcrumb__list-item">
							<a href="#" class="usa-breadcrumb__link">
								<span>Office of HIV and AIDS Malignancy</span>
							</a>
						</li>
						<li class="usa-breadcrumb__list-item">
							<a href="#" class="usa-breadcrumb__link">
								<span>NCI HIV & AIDS Research</span>
							</a>
						</li>
						<li class="usa-breadcrumb__list-item">
							<a href="#" class="usa-breadcrumb__link">
								<span>OHAM Research Activities</span>
							</a>
						</li>
						<li class="usa-breadcrumb__list-item">
							<a href="#" class="usa-breadcrumb__link">
								<span>International Conference on HIV/AIDS Malignancies</span>
							</a>
						</li>
						<li class="usa-breadcrumb__list-item usa-current" aria-current="page">
							<span>Archived International Conference on HIV/AIDS Meeting Materials</span>
						</li>
					</ol>
				</nav>
			</div>

			<div class="grid-col-auto display-none tablet:display-flex flex-align-center margin-left-auto">
				<!-- todo; does not use correct labelled by -->
				<div class="nci-page-options" aria-label="Page options">
					<button class="usa-button usa-button--unstyled" onclick="window.print()">
						<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" class="usa-icon" role="img" aria-labelledby="print-title">
							<title id="print-title">Page options top</title>
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path>
						</svg>
					</button>
					<a class="usa-button usa-button--unstyled" href="mailto:xyz@abc.com">
						<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" class="usa-icon" role="img" aria-labelledby="email-title">
							<title id="email-title">Page options top</title>
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>

	<div class="grid-container">
		<div class="grid-row grid-gap">
			<div class="grid-col-3 nci-no-print">
				<nav aria-label="Secondary navigation example">
					<ul class="usa-sidenav usa-sidenav--nci-sidenav">
						<li class="usa-sidenav__item">
							<a href="#" class="usa-current usa-current--nci-ancestor">Level 1</a>
							<ul class="usa-sidenav__sublist">
								<li class="usa-sidenav__item">
									<a href="#" class="nci-has-children">Level 2 With A Very Long Title To Wrap For Demo</a>
								</li>
								<li class="usa-sidenav__item">
									<a href="#" class="usa-current usa-current--nci-ancestor">
										Level 2
									</a>
									<ul class="usa-sidenav__sublist">
										<li class="usa-sidenav__item">
											<a href="#" class="usa-current usa-current--nci-ancestor">
												Level 3
											</a>
											<ul class="usa-sidenav__sublist">
												<li class="usa-sidenav__item">
													<a href="#" class="usa-current usa-current--nci-ancestor">
														Level 4
													</a>
													<ul class="usa-sidenav__sublist">
														<li class="usa-sidenav__item">
															<a
																href="#"
																class="usa-current usa-current--nci-ancestor"
															>
																Level 5
															</a>
															<ul class="usa-sidenav__sublist">
																<li class="usa-sidenav__item">
																	<a href="#" class="usa-current">Level 6</a>
																</li>
															</ul>
														</li>
													</ul>
												</li>
											</ul>
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
			${mainContent}
		</div>
	</div>

	<footer class="usa-footer usa-footer--nci-big" id="nci-footer">
		<div class="grid-container usa-footer__return-to-top">
			<a href="#top" aria-label="Back To Top"><span>Back To Top</span></a>
		</div>
		<div class="usa-footer__primary-section">
			<div class="grid-container">
				<div class="grid-row grid-gap">
					<div class="tablet:grid-col-8">
						<nav class="usa-footer__nav" aria-label="Footer navigation">
							<div class="grid-row grid-gap-4">
								<div class="mobile-lg:grid-col-6 desktop:grid-col-4">
									<section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
										<div>
											<span class="usa-footer__primary-link usa-footer__nci-list-header">Primary link 1</span>
											<button class="usa-footer__primary-link usa-footer__nci-collapse-header" aria-controls="primary-link-1" aria-expanded="false">
												Primary link 1
											</button>
										</div>
										<ul class="usa-list usa-list--unstyled hidden" id="primary-link-1" aria-label="Primary link 1" aria-hidden="true">
											<li class="usa-footer__secondary-link">
												<a href="#">Secondary link 1</a>
											</li>
											<li class="usa-footer__secondary-link">
												<a href="#">Secondary link 2</a>
											</li>
											<li class="usa-footer__secondary-link">
												<a href="#">
													Secondary link that"s a bit longer than most of the others
												</a>
											</li>
											<li class="usa-footer__secondary-link">
												<a href="#">Secondary link 4</a>
											</li>
										</ul>
									</section>
								</div>
								<div class="mobile-lg:grid-col-6 desktop:grid-col-4">
									<section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
										<div>
											<span class="usa-footer__primary-link usa-footer__nci-list-header">Primary link 2</span>
											<button class="usa-footer__primary-link usa-footer__nci-collapse-header" aria-controls="primary-link-2" aria-expanded="false">
												Primary link 2
											</button>
										</div>
										<ul class="usa-list usa-list--unstyled hidden" id="primary-link-2" aria-label="Primary link 2" aria-hidden="true">
											<li class="usa-footer__secondary-link">
												<a href="#">Secondary link 5</a>
											</li>
											<li class="usa-footer__secondary-link">
												<a href="#">
													Secondary link that"s pretty long
												</a>
											</li>
											<li class="usa-footer__secondary-link">
												<a href="#">Secondary link 7</a>
											</li>
											<li class="usa-footer__secondary-link">
												<a href="#">Secondary link 8</a>
											</li>
										</ul>
									</section>
								</div>
								<div class="mobile-lg:grid-col-6 desktop:grid-col-4">
									<section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
										<div>
											<span class="usa-footer__primary-link usa-footer__nci-list-header">Primary link 3</span>
											<button class="usa-footer__primary-link usa-footer__nci-collapse-header" aria-controls="primary-link-3" aria-expanded="false">
												Primary link 3
											</button>
										</div>
										<ul class="usa-list usa-list--unstyled hidden" id="primary-link-3" aria-label="Primary link 3" aria-hidden="true">
											<li class="usa-footer__secondary-link">
												<a href="#">Secondary link 9</a>
											</li>
											<li class="usa-footer__secondary-link">
												<a href="#">Secondary link 10</a>
											</li>
											<li class="usa-footer__secondary-link">
												<a href="#">Secondary link 11</a>
											</li>
											<li class="usa-footer__secondary-link">
												<a href="#">Secondary link 12</a>
											</li>
										</ul>
									</section>
								</div>
							</div>
						</nav>
					</div>
					<div class="tablet:grid-col-4">
						<div class="usa-sign-up">
							<div class="usa-sign-up__heading">Sign up for email updates</div>
							<form
								aria-label="Footer subscribe"
								class="usa-form"
								id="signup"
								onsubmit="return false;">
								<input
									type="hidden"
									name="category_id"
									id="category_id"
									value="USNIHNCI_C25"
								/>
								<div class="usa-form-group">
									<label class="usa-label" for="email">
										Enter your email address
									</label>
									<input
										class="usa-input width-full"
										id="email"
										name="email"
										type="email"
										value=""
									/>
								</div>
								<button class="usa-button usa-button--accent-warm" type="submit">
									Sign up
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="usa-footer__secondary-section">
			<div class="grid-container">
				<div class="grid-row grid-gap">
					<div class=" usa-footer__logo grid-row desktop:grid-col-5">
						<div class="mobile-lg:grid-col-auto mobile-lg:margin-bottom-3">
							<p class="usa-footer__logo-heading">
								<span class="logo__agency-name">National Cancer Institute</span>
								<span class="logo__parent-organization">at the National Institute of Health</span>
							</p>
						</div>
					</div>
					<div class="usa-footer__contact-links desktop:grid-col-7">
						<div class="usa-footer__contact-heading">Contact Us</div>
						<div class="usa-footer__address">
							<div class="usa-footer__contact-info grid-row grid-gap">
								<div class="tablet:grid-col-auto">
									<a href="#">Live Chat</a>
								</div>
								<div class="tablet:grid-col-auto tablet:margin-left-2">
									<a href="#">1-800-4-CANCER</a>
								</div>
								<div class="tablet:grid-col-auto tablet:margin-left-2">
									<a href="#">NCIinfo@nih.gov</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="grid-row grid-gap">
					<div class="usa-footer__social-links desktop:grid-col-5">
						<div class="usa-footer__social-heading">Follow us</div>
						<div class="grid-row grid-gap-1 nci-big__social">
							<div class="grid-col-auto">
								<a class="usa-social-link usa-social-link--facebook" href="#">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" class="usa-icon" role="img" aria-labelledby="facebook-title">
										<title id="facebook-title">Facebook</title>
										<rect fill="none" height="24" width="24" />
										<path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z" />
									</svg>
								</a>
							</div>

							<div class="grid-col-auto">
								<a class="usa-social-link usa-social-link--twitter" href="#">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="usa-icon" role="img" aria-labelledby="twitter-title">
										<title id="twitter-title">Twitter</title>
										<path id="Twitter"
													d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5,8.1c0,.1,0,.21,0,.31a6.81,6.81,0,0,1-6.86,6.86,6.74,6.74,0,0,1-3.69-1.08,5.63,5.63,0,0,0,.58,0,4.79,4.79,0,0,0,3-1A2.41,2.41,0,0,1,7.8,13.51a1.75,1.75,0,0,0,.46.05,2.59,2.59,0,0,0,.63-.08A2.42,2.42,0,0,1,7,11.11v0a2.33,2.33,0,0,0,1.09.3A2.43,2.43,0,0,1,7.3,8.16a6.84,6.84,0,0,0,5,2.53,2.59,2.59,0,0,1-.07-.55,2.41,2.41,0,0,1,2.41-2.41,2.38,2.38,0,0,1,1.77.76A4.67,4.67,0,0,0,17.9,7.9a2.39,2.39,0,0,1-1.06,1.34,4.55,4.55,0,0,0,1.39-.39A5,5,0,0,1,17,10.1Z" />
									</svg>
								</a>
							</div>

							<div class="grid-col-auto">
								<a class="usa-social-link usa-social-link--instagram" href="#">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="usa-icon" role="img" aria-labelledby="instagram-title">
										<title id="instagram-title">Instagram</title>
										<g id="Instagram">
											<path d="M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z" />
											<path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm6,12.69A3.32,3.32,0,0,1,14.69,18H9.31A3.32,3.32,0,0,1,6,14.69V9.31A3.32,3.32,0,0,1,9.31,6h5.38A3.32,3.32,0,0,1,18,9.31Z" />
											<path d="M16.94,9.31a2.25,2.25,0,0,0-2.25-2.25H9.31A2.25,2.25,0,0,0,7.06,9.31v5.38a2.25,2.25,0,0,0,2.25,2.25h5.38a2.25,2.25,0,0,0,2.25-2.25h0ZM12,15.09A3.09,3.09,0,1,1,15.09,12,3.09,3.09,0,0,1,12,15.09Zm3.77-5.75a.79.79,0,0,1-.55.23.83.83,0,0,1-.55-.23.78.78,0,0,1,0-1.11A.82.82,0,0,1,15.22,8a.78.78,0,0,1,.55,1.33Z" />
										</g>
									</svg>
								</a>
							</div>

							<div class="grid-col-auto">
								<a class="usa-social-link usa-social-link--youtube" href="#">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="usa-icon" role="img" aria-labelledby="youtube-title">
										<title id="youtube-title">Youtube</title>
										<g id="YouTube">
											<path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.75,12.91A1.49,1.49,0,0,1,16.69,16a34.65,34.65,0,0,1-4.69.26A34.65,34.65,0,0,1,7.31,16a1.49,1.49,0,0,1-1.06-1.06A15.88,15.88,0,0,1,6,12a15.88,15.88,0,0,1,.25-2.91A1.49,1.49,0,0,1,7.31,8,34.65,34.65,0,0,1,12,7.77,34.65,34.65,0,0,1,16.69,8a1.49,1.49,0,0,1,1.06,1.06A15.88,15.88,0,0,1,18,12,15.88,15.88,0,0,1,17.75,14.91Z" />
											<polygon points="10.77 13.78 13.91 12 10.77 10.22 10.77 13.78" />
										</g>
									</svg>
								</a>
							</div>

							<div class="grid-col-auto">
								<a class="usa-social-link usa-social-link--linkedin" href="#">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="usa-icon" role="img" aria-labelledby="linkedin-title">
										<title id="linkedin-title">Linkedin</title>
										<g id="final">
											<path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M8.912001,17.584H6.584v-7.472h2.328001V17.584z
												M7.744,9.104C6.992,9.104,6.4,8.488,6.4,7.76c0-0.752,0.592-1.344,1.344-1.344c0.728,0,1.343999,0.592,1.343999,1.344
												C9.087999,8.488,8.472,9.104,7.744,9.104z M17.6,17.584h-2.328v-3.64c0-0.856-0.024001-1.967999-1.216001-1.967999
												s-1.392,0.927999-1.392,1.912v3.696H10.36v-7.472h2.224v1.008h0.024c0.464-0.752,1.296-1.216001,2.199999-1.192
												c2.352001,0,2.792,1.552001,2.792,3.544001C17.6,13.472,17.6,17.584,17.6,17.584z" />
										</g>
									</svg>
								</a>
							</div>
						</div>
					</div>
					<div class="usa-footer__contact-links desktop:grid-col-7">
						<div class="usa-footer__address height-full">
							<div class="usa-footer__contact-info grid-row grid-gap height-full">
								<address>
									<a href="#">
										U.S. Department of Health and Human Services
									</a>
									<a href="#">
										National Institutes of Health
									</a>
									<a href="#">
										National Cancer Institute
									</a>
									<a href="#">USA.gov</a>
								</address>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
`;

export const InnerContentWithExpandedMegaMenu = () => (
	<TestCase css={css} html={html} />
);
