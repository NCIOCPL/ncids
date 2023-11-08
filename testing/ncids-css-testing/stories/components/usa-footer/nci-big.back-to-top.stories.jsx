import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-big.scss';

// language=HTML
const html = `
	<footer class="usa-footer usa-footer--nci-big" id="nci-footer">
		<div class="usa-footer__nci-return-to-top show">
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
													Secondary link that's a bit longer than most of the others
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
													Secondary link that's pretty long
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
                accept-charset="UTF-8"
                action="https://public.govdelivery.com/accounts/USNIHNCI/subscribers/qualify"
                aria-label="Footer subscribe"
                class="usa-form"
                id="signup"
                method="post"
                novalidate
                onsubmit="return false;"
                target="_blank">
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
								<a class="usa-social-link" href="#">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="usa-icon" role="img" aria-labelledby="facebook-title">
										<title id="facebook-title">Facebook</title>
										<path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z" />
									</svg>
								</a>
							</div>

							<div class="grid-col-auto">
								<a class="usa-social-link" href="#">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="usa-icon" role="img" aria-labelledby="x-title">
										<title id="x-title">Follow on X</title>
										<path
											d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10zm5.2-15.6L13.3 11l4.3 6.2h-3.1L11.6 13 8 17.2h-.9l4.1-4.8-4.1-6h3.1l2.7 3.9 3.4-3.9h.9zm-5.6 5.4.4.6 2.8 4h1.4l-3.5-5-.4-.6-2.6-3.7H8.3l3.3 4.7z"
										/>
						  			</svg>
								</a>
							</div>

							<div class="grid-col-auto">
								<a class="usa-social-link" href="#">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="usa-icon" role="img" aria-labelledby="instagram-title">
										<title id="instagram-title">Instagram</title>									
										<path d="M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z" />
										<path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm6,12.69A3.32,3.32,0,0,1,14.69,18H9.31A3.32,3.32,0,0,1,6,14.69V9.31A3.32,3.32,0,0,1,9.31,6h5.38A3.32,3.32,0,0,1,18,9.31Z" />
										<path d="M16.94,9.31a2.25,2.25,0,0,0-2.25-2.25H9.31A2.25,2.25,0,0,0,7.06,9.31v5.38a2.25,2.25,0,0,0,2.25,2.25h5.38a2.25,2.25,0,0,0,2.25-2.25h0ZM12,15.09A3.09,3.09,0,1,1,15.09,12,3.09,3.09,0,0,1,12,15.09Zm3.77-5.75a.79.79,0,0,1-.55.23.83.83,0,0,1-.55-.23.78.78,0,0,1,0-1.11A.82.82,0,0,1,15.22,8a.78.78,0,0,1,.55,1.33Z" />
									</svg>
								</a>
							</div>

							<div class="grid-col-auto">
								<a class="usa-social-link" href="#">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="usa-icon" role="img" aria-labelledby="youtube-title">
										<title id="youtube-title">Youtube</title>
										<path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.75,12.91A1.49,1.49,0,0,1,16.69,16a34.65,34.65,0,0,1-4.69.26A34.65,34.65,0,0,1,7.31,16a1.49,1.49,0,0,1-1.06-1.06A15.88,15.88,0,0,1,6,12a15.88,15.88,0,0,1,.25-2.91A1.49,1.49,0,0,1,7.31,8,34.65,34.65,0,0,1,12,7.77,34.65,34.65,0,0,1,16.69,8a1.49,1.49,0,0,1,1.06,1.06A15.88,15.88,0,0,1,18,12,15.88,15.88,0,0,1,17.75,14.91Z" />
										<polygon points="10.77 13.78 13.91 12 10.77 10.22 10.77 13.78" />
									</svg>
								</a>
							</div>

							<div class="grid-col-auto">
								<a class="usa-social-link" href="#">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="usa-icon" role="img" aria-labelledby="linkedin-title">
										<title id="linkedin-title">Linkedin</title>
										<path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M8.912001,17.584H6.584v-7.472h2.328001V17.584z
											M7.744,9.104C6.992,9.104,6.4,8.488,6.4,7.76c0-0.752,0.592-1.344,1.344-1.344c0.728,0,1.343999,0.592,1.343999,1.344
											C9.087999,8.488,8.472,9.104,7.744,9.104z M17.6,17.584h-2.328v-3.64c0-0.856-0.024001-1.967999-1.216001-1.967999
											s-1.392,0.927999-1.392,1.912v3.696H10.36v-7.472h2.224v1.008h0.024c0.464-0.752,1.296-1.216001,2.199999-1.192
											c2.352001,0,2.792,1.552001,2.792,3.544001C17.6,13.472,17.6,17.584,17.6,17.584z" />
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

export const NCIBigBackToTop = () => <TestCase css={css} html={html} />;
