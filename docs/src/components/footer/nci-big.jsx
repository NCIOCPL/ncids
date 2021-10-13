import React, { useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Icon from '../icon/icon';
import NCISignUp from './nci-sign-up';

export const NCIBigFooter = ({ accountId, categoryId }) => {
	const [activeItem, setActiveItem] = useState(0);

	return (
		<footer className="usa-footer usa-footer--big usa-footer--nci-big">
			<div className="grid-container usa-footer__return-to-top">
				<Link to="#top">Return to top</Link>
			</div>

			<div className="usa-footer__primary-section">
				<div className="grid-container">
					<div className="grid-row grid-gap">
						<div className="tablet:grid-col-8">
							<nav className="usa-footer__nav" aria-label="Footer navigation">
								<div className="grid-row grid-gap-4">
									<div className="mobile-lg:grid-col-6 desktop:grid-col-4">
										<section
											className={`usa-footer__primary-content usa-footer__primary-content--collapsible ${
												activeItem === 1 ? 'visible' : 'hidden'
											} `}>
											<h4>
												<button
													onClick={() =>
														setActiveItem(activeItem === 1 ? 0 : 1)
													}
													aria-expanded={activeItem === 1}
													aria-controls="accordion1"
													className="usa-button usa-button--unstyled usa-footer__primary-link usa-footer__nci-primary-link--accordion-header">
													Header 1
												</button>

												<span className="usa-footer__primary-link usa-footer__nci-primary-link--list-header">
													Header 1
												</span>
											</h4>

											<ul
												aria-label="Header 1"
												className="usa-list usa-list--unstyled"
												id="accordion1">
												<li className="usa-footer__secondary-link">
													<Link to="/">Secondary link 1</Link>
												</li>

												<li className="usa-footer__secondary-link">
													<Link to="/">Secondary link 2</Link>
												</li>

												<li className="usa-footer__secondary-link">
													<Link to="/">
														Secondary link that&#39;s a bit longer than most of
														the others
													</Link>
												</li>

												<li className="usa-footer__secondary-link">
													<Link to="/">Secondary link 4</Link>
												</li>
											</ul>
										</section>
									</div>

									<div className="mobile-lg:grid-col-6 desktop:grid-col-4">
										<section
											className={`usa-footer__primary-content usa-footer__primary-content--collapsible ${
												activeItem === 2 ? 'visible' : 'hidden'
											} `}>
											<h4>
												<button
													onClick={() =>
														setActiveItem(activeItem === 2 ? 0 : 2)
													}
													aria-expanded={activeItem === 2}
													aria-controls="accordion2"
													className="usa-button usa-button--unstyled usa-footer__primary-link usa-footer__nci-primary-link--accordion-header">
													Header 2
												</button>

												<span className="usa-footer__primary-link usa-footer__nci-primary-link--list-header">
													Header 2
												</span>
											</h4>

											<ul
												aria-label="Header 2"
												className="usa-list usa-list--unstyled"
												id="accordion2">
												<li className="usa-footer__secondary-link">
													<Link to="/">Secondary link 5</Link>
												</li>

												<li className="usa-footer__secondary-link">
													<Link to="/">
														Secondary link that&#39;s pretty long
													</Link>
												</li>

												<li className="usa-footer__secondary-link">
													<Link to="/">Secondary link 7</Link>
												</li>

												<li className="usa-footer__secondary-link">
													<Link to="/">Secondary link 8</Link>
												</li>
											</ul>
										</section>
									</div>

									<div className="mobile-lg:grid-col-6 desktop:grid-col-4">
										<section
											className={`usa-footer__primary-content usa-footer__primary-content--collapsible ${
												activeItem === 3 ? 'visible' : 'hidden'
											} `}>
											<h4>
												<button
													onClick={() =>
														setActiveItem(activeItem === 3 ? 0 : 3)
													}
													aria-expanded={activeItem === 3}
													aria-controls="accordion3"
													className="usa-button usa-button--unstyled usa-footer__primary-link usa-footer__nci-primary-link--accordion-header">
													Header 3
												</button>

												<span className="usa-footer__primary-link usa-footer__nci-primary-link--list-header">
													Header 3
												</span>
											</h4>

											<ul
												aria-label="Header 3"
												className="usa-list usa-list--unstyled"
												id="accordion3">
												<li className="usa-footer__secondary-link">
													<Link to="/">Secondary link 9</Link>
												</li>

												<li className="usa-footer__secondary-link">
													<Link to="/">Secondary link 10</Link>
												</li>

												<li className="usa-footer__secondary-link">
													<Link to="/">Secondary link 11</Link>
												</li>

												<li className="usa-footer__secondary-link">
													<Link to="/">Secondary link 12</Link>
												</li>
											</ul>
										</section>
									</div>
								</div>
							</nav>
						</div>

						<div className="tablet:grid-col-4">
							<NCISignUp accountId={accountId} categoryId={categoryId} />
						</div>
					</div>
				</div>
			</div>

			<div className="usa-footer__secondary-section">
				<div className="grid-container">
					<div className="grid-row grid-gap">
						<div
							className="
								usa-footer__logo
								grid-row
								mobile-lg:grid-col-6 mobile-lg:grid-gap-2
							">
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

						<div className="usa-footer__contact-links mobile-lg:grid-col-6">
							<h3 className="usa-footer__contact-heading">Contact Us</h3>

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
						<div className="usa-footer__social-links mobile-lg:grid-col-6">
							<h3 className="usa-footer__social-heading">Follow us</h3>

							<div className="grid-row grid-gap-1 ncids-big__social">
								<div className="grid-col-auto">
									<a
										aria-label="Facebook"
										className="usa-social-link usa-social-link--facebook"
										href="https://www.facebook.com/cancer.gov">
										<Icon glyph={'facebook'} />
									</a>
								</div>

								<div className="grid-col-auto">
									<a
										aria-label="Twitter"
										className="usa-social-link usa-social-link--twitter"
										href="https://twitter.com/thenci">
										<Icon glyph={'twitter'} />
									</a>
								</div>

								<div className="grid-col-auto">
									<a
										aria-label="Youtube"
										className="usa-social-link usa-social-link--youtube"
										href="https://youtube.com/NCIgov">
										<Icon glyph={'youtube'} />
									</a>
								</div>

								<div className="grid-col-auto">
									<a
										aria-label="RSS"
										className="usa-social-link usa-social-link--rss"
										href="https://www.cancer.gov/syndication/rss">
										<Icon glyph={'rss'} />
									</a>
								</div>
							</div>
						</div>

						<div className="usa-footer__contact-links mobile-lg:grid-col-6">
							<div className="usa-footer__address height-full">
								<div className="usa-footer__contact-info grid-row grid-gap height-full">
									<address className="mobile-lg:margin-x-2">
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

NCIBigFooter.defaultProps = {
	accountId: '',
	categoryId: '',
};

export default NCIBigFooter;
