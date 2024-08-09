import React, { useState } from 'react';
import { Link } from 'gatsby';
import BackToTop from './back-to-top';
import PropTypes from 'prop-types';

export const NCIBigFooter = () => {
	const [activeItem, setActiveItem] = useState(0);

	return (
		<footer className="usa-footer usa-footer--nci-big">
			<BackToTop />
			<div className="usa-footer__primary-section">
				<div className="grid-container">
					<div className="grid-row grid-gap">
						<div className="tablet:grid-col-8">
							<nav
								className="usa-footer__nav"
								aria-label="FooterNavigation_Site">
								<div className="grid-row grid-gap-4">
									<div
										className="mobile-l
									g:grid-col-6 desktop:grid-col-4">
										<section className="usa-footer__primary-content usa-footer__primary-content--collapsible">
											<div>
												<button
													onClick={() =>
														setActiveItem(activeItem === 1 ? 0 : 1)
													}
													aria-expanded={activeItem === 1}
													aria-controls="accordion1"
													className="usa-footer__primary-link usa-footer__nci-collapse-header">
													About
												</button>

												<span className="usa-footer__primary-link usa-footer__nci-list-header">
													About
												</span>
											</div>

											<ul
												aria-label="Header 1 Site"
												className={`usa-list usa-list--unstyled ${
													activeItem === 1 ? 'visible' : 'hidden'
												} `}
												id="accordion1">
												<li className="usa-footer__secondary-link">
													<Link to="/about/">About NCIDS</Link>
												</li>
											</ul>
										</section>
									</div>

									<div className="mobile-lg:grid-col-6 desktop:grid-col-4">
										<section className="usa-footer__primary-content usa-footer__primary-content--collapsible">
											<div>
												<button
													onClick={() =>
														setActiveItem(activeItem === 2 ? 0 : 2)
													}
													aria-expanded={activeItem === 2}
													aria-controls="accordion2"
													className="usa-footer__primary-link usa-footer__nci-collapse-header">
													Resources
												</button>

												<span className="usa-footer__primary-link usa-footer__nci-list-header">
													Resources
												</span>
											</div>

											<ul
												aria-label="Header 2 Site"
												className={`usa-list usa-list--unstyled ${
													activeItem === 2 ? 'visible' : 'hidden'
												} `}
												id="accordion2">
												<li className="usa-footer__secondary-link">
													<Link to="/get-started/">Getting Started</Link>
												</li>

												<li className="usa-footer__secondary-link">
													<Link to="/foundations/">Foundations</Link>
												</li>

												<li className="usa-footer__secondary-link">
													<Link to="/components/">Components</Link>
												</li>
											</ul>
										</section>
									</div>

									<div className="mobile-lg:grid-col-6 desktop:grid-col-4">
										<section className="usa-footer__primary-content usa-footer__primary-content--collapsible">
											<div>
												<button
													onClick={() =>
														setActiveItem(activeItem === 3 ? 0 : 3)
													}
													aria-expanded={activeItem === 3}
													aria-controls="accordion3"
													className="usa-footer__primary-link usa-footer__nci-collapse-header">
													Policies
												</button>

												<span className="usa-footer__primary-link usa-footer__nci-list-header">
													Policies
												</span>
											</div>

											<ul
												aria-label="Header 3 Site"
												className={`usa-list usa-list--unstyled ${
													activeItem === 3 ? 'visible' : 'hidden'
												} `}
												id="accordion3">
												<li className="usa-footer__secondary-link">
													<a href="https://www.cancer.gov/policies/accessibility">
														Accessibility
													</a>
												</li>

												<li className="usa-footer__secondary-link">
													<a href="https://www.cancer.gov/policies/foia">
														FOIA
													</a>
												</li>

												<li className="usa-footer__secondary-link">
													<a href="https://www.cancer.gov/policies/privacy-security">
														Privacy & Security
													</a>
												</li>

												<li className="usa-footer__secondary-link">
													<a href="https://www.cancer.gov/policies/disclaimer">
														Disclaimers
													</a>
												</li>

												<li className="usa-footer__secondary-link">
													<a href="https://www.hhs.gov/vulnerability-disclosure-policy/index.html">
														Vulnerability Disclosure
													</a>
												</li>
											</ul>
										</section>
									</div>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>

			<div className="usa-footer__secondary-section">
				<div className="grid-container">
					<div className="grid-row grid-gap">
						<div className=" usa-footer__logo grid-row desktop:grid-col-5">
							<div className="mobile-lg:grid-col-auto mobile-lg:margin-bottom-3">
								<p className="usa-footer__logo-heading">
									<span className="logo__agency-name">
										National Cancer Institute{' '}
									</span>
									<span className="logo__parent-organization">
										at the National Institute of Health
									</span>
								</p>
							</div>
						</div>

						<div className="usa-footer__contact-links desktop:grid-col-7">
							<div className="usa-footer__contact-heading">Contact Us</div>

							<div className="usa-footer__address">
								<div className="usa-footer__contact-info grid-row grid-gap">
									<div className="tablet:grid-col-auto">
										<a href="tel:1-800-4-CANCER">Live Chat</a>
									</div>

									<div className="tablet:grid-col-auto tablet:margin-left-2">
										<a href="tel:1-800-4-CANCER">1-800-4-CANCER</a>
									</div>

									<div className="tablet:grid-col-auto tablet:margin-left-2">
										<a href="mailto:NCIinfo@nih.gov">NCIinfo@nih.gov</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="grid-row grid-gap">
						<div className="usa-footer__social-links desktop:grid-col-5">
							<div className="usa-footer__social-heading">Follow us</div>
							<div className="grid-row grid-gap-1 nci-big__social">
								<div className="grid-col-auto">
									<a
										className="usa-social-link usa-social-link--facebook"
										href="https://www.facebook.com/cancer.gov">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="24"
											className="usa-icon"
											role="img"
											aria-labelledby="facebook-title_site">
											<title id="facebook-title_site">Facebook</title>
											<rect fill="none" height="24" width="24" />
											<path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z" />
										</svg>
									</a>
								</div>
								<div className="grid-col-auto">
									<a
										className="usa-social-link"
										href="https://twitter.com/thenci">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											className="usa-icon"
											role="img"
											aria-labelledby="x-title">
											<title id="x-title">Follow on X</title>
											<path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10zm5.2-15.6L13.3 11l4.3 6.2h-3.1L11.6 13 8 17.2h-.9l4.1-4.8-4.1-6h3.1l2.7 3.9 3.4-3.9h.9zm-5.6 5.4.4.6 2.8 4h1.4l-3.5-5-.4-.6-2.6-3.7H8.3l3.3 4.7z" />
										</svg>
									</a>
								</div>
								<div className="grid-col-auto">
									<a
										className="usa-social-link usa-social-link--instagram"
										href="https://www.instagram.com/nationalcancerinstitute/">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											className="usa-icon"
											role="img"
											aria-labelledby="instagram-title_site">
											<title id="instagram-title_site">Instagram</title>
											<g id="Instagram_docsite">
												<path d="M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z" />
												<path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm6,12.69A3.32,3.32,0,0,1,14.69,18H9.31A3.32,3.32,0,0,1,6,14.69V9.31A3.32,3.32,0,0,1,9.31,6h5.38A3.32,3.32,0,0,1,18,9.31Z" />
												<path d="M16.94,9.31a2.25,2.25,0,0,0-2.25-2.25H9.31A2.25,2.25,0,0,0,7.06,9.31v5.38a2.25,2.25,0,0,0,2.25,2.25h5.38a2.25,2.25,0,0,0,2.25-2.25h0ZM12,15.09A3.09,3.09,0,1,1,15.09,12,3.09,3.09,0,0,1,12,15.09Zm3.77-5.75a.79.79,0,0,1-.55.23.83.83,0,0,1-.55-.23.78.78,0,0,1,0-1.11A.82.82,0,0,1,15.22,8a.78.78,0,0,1,.55,1.33Z" />
											</g>
										</svg>
									</a>
								</div>
								<div className="grid-col-auto">
									<a
										className="usa-social-link usa-social-link--youtube"
										href="https://www.youtube.com/NCIgov">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											className="usa-icon"
											role="img"
											aria-labelledby="youtube-title_site">
											<title id="youtube-title_site">Youtube</title>
											<g id="YouTube_docsite">
												<path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.75,12.91A1.49,1.49,0,0,1,16.69,16a34.65,34.65,0,0,1-4.69.26A34.65,34.65,0,0,1,7.31,16a1.49,1.49,0,0,1-1.06-1.06A15.88,15.88,0,0,1,6,12a15.88,15.88,0,0,1,.25-2.91A1.49,1.49,0,0,1,7.31,8,34.65,34.65,0,0,1,12,7.77,34.65,34.65,0,0,1,16.69,8a1.49,1.49,0,0,1,1.06,1.06A15.88,15.88,0,0,1,18,12,15.88,15.88,0,0,1,17.75,14.91Z" />
												<polygon points="10.77 13.78 13.91 12 10.77 10.22 10.77 13.78" />
											</g>
										</svg>
									</a>
								</div>
								<div className="grid-col-auto">
									<a
										className="usa-social-link usa-social-link--linkedin"
										href="https://www.linkedin.com/company/nationalcancerinstitute/">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											className="usa-icon"
											role="img"
											aria-labelledby="linkedin-title_site">
											<title id="linkedin-title_site">Linkedin</title>
											<g id="final_docsite">
												<path
													d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M8.912001,17.584H6.584v-7.472h2.328001V17.584z
												M7.744,9.104C6.992,9.104,6.4,8.488,6.4,7.76c0-0.752,0.592-1.344,1.344-1.344c0.728,0,1.343999,0.592,1.343999,1.344
												C9.087999,8.488,8.472,9.104,7.744,9.104z M17.6,17.584h-2.328v-3.64c0-0.856-0.024001-1.967999-1.216001-1.967999
												s-1.392,0.927999-1.392,1.912v3.696H10.36v-7.472h2.224v1.008h0.024c0.464-0.752,1.296-1.216001,2.199999-1.192
												c2.352001,0,2.792,1.552001,2.792,3.544001C17.6,13.472,17.6,17.584,17.6,17.584z"
												/>
											</g>
										</svg>
									</a>
								</div>
							</div>
						</div>

						<div className="usa-footer__contact-links desktop:grid-col-7">
							<div className="usa-footer__address height-full">
								<div className="usa-footer__contact-info grid-row grid-gap height-full">
									<address>
										<a href="https://www.hhs.gov/">
											U.S. Department of Health and Human Services
										</a>
										<a href="https://www.nih.gov/">
											National Institutes of Health
										</a>
										<a href="https://www.cancer.gov/">
											National Cancer Institute
										</a>
										<a href="https://usa.gov/">USA.gov</a>
									</address>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

NCIBigFooter.propTypes = {
	accountId: PropTypes.string,
	categoryId: PropTypes.string,
};

export default NCIBigFooter;
