import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './microsite-home.scss';

import { primaryNojs } from '../../components/nci-header/nci-header-primary';
import { secondary } from '../../components/nci-header/nci-header-secondary';

// language=HTML
const html = `
	<a class="usa-skipnav" href="#main-content">Skip to main content</a>
	<section class="usa-banner usa-banner--nci-banner" aria-label="Official government website">
		<header class="usa-banner__header">
			<div class="usa-banner__inner">
				<div class="usa-banner__header-text">
					An official website of the United States government
				</div>
				<button href="/" class="usa-button usa-button--nci-small">Español</button>
			</div>
		</header>
	</section>

	<header class="nci-header nci-header--extended">
		<div class="nci-header__navbar">
			<div class="nci-logo">
				<a href="#" aria-label="Homepage">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 385 38" aria-hidden="true">
						<g id="d">
							<path fill="#bb0e3d" d="M68,12.57h2.78v12.44h-2.78l-5.92-7.79v7.79h-2.78V12.57h2.6l6.1,8.01V12.57Z" />
							<path fill="#bb0e3d" d="M82.69,25.01l-1.16-2.69h-5.21l-1.16,2.69h-2.95l5.37-12.44h2.69l5.37,12.44h-2.95Zm-3.75-8.73l-1.57,3.61h3.11l-1.55-3.61Z" />
							<path fill="#bb0e3d" d="M91.44,14.97v10.03h-2.78V14.97h-3.52v-2.4h9.82v2.4h-3.52Z" />
							<path fill="#bb0e3d" d="M96.99,12.57h2.78v12.44h-2.78V12.57Z" />
							<path fill="#bb0e3d" d="M113.29,23.29c-1.26,1.23-2.8,1.84-4.64,1.84s-3.39-.61-4.64-1.84-1.89-2.75-1.89-4.58,.63-3.35,1.89-4.58,2.8-1.84,4.64-1.84,3.39,.61,4.64,1.84,1.89,2.76,1.89,4.58-.63,3.35-1.89,4.58Zm-.94-4.57c0-1.11-.36-2.05-1.07-2.84s-1.59-1.17-2.62-1.17-1.91,.39-2.62,1.17c-.71,.78-1.07,1.73-1.07,2.84s.36,2.05,1.07,2.83c.71,.78,1.59,1.17,2.62,1.17s1.91-.39,2.62-1.17c.71-.78,1.07-1.72,1.07-2.83Z" />
							<path fill="#bb0e3d" d="M126.22,12.57h2.78v12.44h-2.78l-5.92-7.79v7.79h-2.78V12.57h2.6l6.1,8.01V12.57Z" />
							<path fill="#bb0e3d" d="M140.91,25.01l-1.16-2.69h-5.21l-1.16,2.69h-2.95l5.37-12.44h2.69l5.37,12.44h-2.95Zm-3.75-8.73l-1.57,3.61h3.11l-1.55-3.61Z" />
							<path fill="#bb0e3d" d="M145.31,25.01V12.57h2.78v9.96h5.3v2.47h-8.08Z" />
							<path fill="#bb0e3d" d="M165.82,22.55c1.36,0,2.48-.54,3.34-1.62l1.78,1.83c-1.41,1.59-3.07,2.38-4.99,2.38s-3.49-.6-4.73-1.81-1.86-2.74-1.86-4.58,.63-3.38,1.89-4.62,2.81-1.85,4.63-1.85c2.04,0,3.75,.78,5.12,2.33l-1.73,1.96c-.88-1.09-1.97-1.64-3.27-1.64-1.04,0-1.94,.34-2.68,1.02-.74,.68-1.11,1.6-1.11,2.76s.35,2.08,1.05,2.78c.7,.7,1.55,1.05,2.54,1.05Z" />
							<path fill="#bb0e3d" d="M181.9,25.01l-1.16-2.69h-5.21l-1.16,2.69h-2.95l5.37-12.44h2.69l5.37,12.44h-2.95Zm-3.75-8.73l-1.57,3.61h3.11l-1.55-3.61Z" />
							<path fill="#bb0e3d" d="M195,12.57h2.78v12.44h-2.78l-5.92-7.79v7.79h-2.78V12.57h2.6l6.1,8.01V12.57h0Z" />
							<path fill="#bb0e3d" d="M206.54,22.55c1.36,0,2.48-.54,3.34-1.62l1.78,1.83c-1.41,1.59-3.07,2.38-4.99,2.38s-3.49-.6-4.73-1.81-1.86-2.74-1.86-4.58,.63-3.38,1.89-4.62,2.81-1.85,4.63-1.85c2.04,0,3.75,.78,5.12,2.33l-1.73,1.96c-.88-1.09-1.97-1.64-3.27-1.64-1.04,0-1.94,.34-2.68,1.02-.74,.68-1.11,1.6-1.11,2.76s.35,2.08,1.05,2.78c.7,.7,1.55,1.05,2.54,1.05Z" />
							<path fill="#bb0e3d" d="M222.82,12.57v2.47h-6.19v2.56h5.57v2.37h-5.57v2.58h6.39v2.45h-9.16V12.57h8.97Z" />
							<path fill="#bb0e3d" d="M235.57,16.7c0,1.99-.79,3.28-2.37,3.86l3.15,4.45h-3.42l-2.76-3.97h-1.92v3.97h-2.78V12.57h4.71c1.93,0,3.31,.33,4.14,.98,.82,.65,1.24,1.7,1.24,3.15Zm-3.34,1.48c.34-.31,.52-.8,.52-1.47s-.18-1.13-.53-1.38c-.36-.25-.98-.37-1.87-.37h-2.08v3.68h2.03c.95,0,1.6-.15,1.94-.46Z" />
							<path fill="#bb0e3d" d="M243.12,12.57h2.78v12.44h-2.78V12.57Z" />
							<path fill="#bb0e3d" d="M257.65,12.57h2.78v12.44h-2.78l-5.92-7.79v7.79h-2.78V12.57h2.6l6.1,8.01V12.57h0Z" />
							<path fill="#bb0e3d" d="M266.39,15.05c-.27,.22-.4,.51-.4,.87s.16,.65,.49,.86c.33,.21,1.08,.47,2.26,.76,1.18,.29,2.1,.73,2.75,1.31,.65,.58,.98,1.43,.98,2.54s-.42,2.02-1.25,2.71-1.94,1.04-3.3,1.04c-1.97,0-3.74-.73-5.32-2.19l1.65-2.03c1.34,1.17,2.58,1.76,3.72,1.76,.51,0,.91-.11,1.2-.33s.44-.52,.44-.89-.15-.67-.46-.89c-.31-.22-.92-.44-1.83-.67-1.45-.34-2.51-.79-3.18-1.34-.67-.55-1-1.42-1-2.6s.42-2.09,1.27-2.73,1.91-.96,3.18-.96c.83,0,1.66,.14,2.49,.43,.83,.28,1.55,.69,2.17,1.21l-1.41,2.03c-1.08-.82-2.19-1.23-3.34-1.23-.46,0-.83,.11-1.09,.33Z" />
							<path fill="#bb0e3d" d="M279.99,14.97v10.03h-2.78V14.97h-3.52v-2.4h9.82v2.4h-3.52Z" />
							<path fill="#bb0e3d" d="M285.54,12.57h2.78v12.44h-2.78V12.57Z" />
							<path fill="#bb0e3d" d="M296.65,14.97v10.03h-2.78V14.97h-3.52v-2.4h9.82v2.4h-3.52Z" />
							<path fill="#bb0e3d" d="M305.49,21.79c.46,.58,1.09,.86,1.87,.86s1.4-.29,1.86-.86c.46-.58,.68-1.36,.68-2.36v-6.87h2.78v6.96c0,1.8-.5,3.19-1.49,4.15-1,.97-2.27,1.45-3.82,1.45s-2.83-.49-3.83-1.46-1.5-2.35-1.5-4.15v-6.96h2.78v6.87c0,1,.23,1.78,.69,2.36Z" />
							<path fill="#bb0e3d" d="M320.82,14.97v10.03h-2.78V14.97h-3.52v-2.4h9.82v2.4h-3.52Z" />
							<path fill="#bb0e3d" d="M335.34,12.57v2.47h-6.19v2.56h5.57v2.37h-5.57v2.58h6.39v2.45h-9.16V12.57h8.97Z" />
						</g>
						<g id="e">
							<path fill="#ba1f40" d="M43.8,4.6c-.7-1-1.8-1.7-3-1.7h-2.7l9.1,16.1-9.1,16.1h2.7c1.3,0,2.4-.7,3-1.7l8-14.4-8-14.4Z" />
							<path fill="#606061" d="M44.7,19L35.8,2.9H3.5C1.5,2.9,0,4.5,0,6.4V31.7c0,1.9,1.5,3.5,3.5,3.5H35.8l8.9-16.2Z" />
							<rect fill="#fff" x="19.1" y="11.9" width="2.4" height="14.3" />
							<polygon fill="#fff" points="14.3 11.9 14.3 22.3 7.7 11.9 5.4 11.9 5.4 26.2 7.7 26.2 7.7 15.7 14.3 26.2 16.7 26.2 16.7 11.9 14.3 11.9" />
							<polygon fill="#fff" points="32.8 11.9 32.8 17.8 26.2 17.8 26.2 11.9 23.8 11.9 23.8 26.2 26.2 26.2 26.2 20.2 32.8 20.2 32.8 26.2 35.2 26.2 35.2 11.9 32.8 11.9" />
						</g>
					</svg>
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
				${primaryNojs}
			</div>
		</nav>
	</header>

    <div class="grid-container" style="height: 100px; background-color: #C5C5C5;">Call to Action Strip Goes Here</div>

    <div class="grid-container" style="height: 100px; background-color: #979797;">Inline Video Go Here</div>

    <div class="grid-container" style="height: 100px; background-color: #C5C5C5;">PromoBlocks Go Here</div>

	<footer class="usa-footer usa-footer--nci-big" id="nci-footer">
		<div class="grid-container usa-footer__return-to-top">
			<a href="#">Return to top</a>
		</div>
		<div class="usa-footer__primary-section">
			<div class="grid-container">
				<div class="grid-row grid-gap">
					<div class="tablet:grid-col-8">
						<nav class="usa-footer__nav" aria-label="Footer navigation">
							<div class="grid-row grid-gap-4">
								<div class="mobile-lg:grid-col-6 desktop:grid-col-4">
									<section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
										<h4>
											<span class="usa-footer__primary-link usa-footer__nci-list-header">Primary link 1</span>
											<button class="usa-footer__primary-link usa-footer__nci-collapse-header"
															aria-controls="primary-link-1" aria-expanded="false">Primary link 1
											</button>
										</h4>
										<ul class="usa-list usa-list--unstyled hidden" id="primary-link-1" aria-label="Primary link 1"
												aria-hidden="true">
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
										<h4>
											<span class="usa-footer__primary-link usa-footer__nci-list-header">Primary link 2</span>
											<button class="usa-footer__primary-link usa-footer__nci-collapse-header"
															aria-controls="primary-link-2" aria-expanded="false">Primary link 2
											</button>
										</h4>
										<ul class="usa-list usa-list--unstyled hidden" id="primary-link-2" aria-label="Primary link 2"
												aria-hidden="true">
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
										<h4>
											<span class="usa-footer__primary-link usa-footer__nci-list-header">Primary link 3</span>
											<button class="usa-footer__primary-link usa-footer__nci-collapse-header"
															aria-controls="primary-link-3" aria-expanded="false">Primary link 3
											</button>
										</h4>
										<ul class="usa-list usa-list--unstyled hidden" id="primary-link-3" aria-label="Primary link 3"
												aria-hidden="true">
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
							<h3 class="usa-sign-up__heading">Sign up for email updates</h3>
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
						<h3 class="usa-footer__contact-heading">Contact Us</h3>
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
						<h3 class="usa-footer__social-heading">Follow us</h3>
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

export const MicrositeHome = () => <TestCase css={css} html={html} />;
