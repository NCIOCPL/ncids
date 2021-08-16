import React from 'react';
import { Link } from 'gatsby';

export const MediumFooter = () => {
	return (
		<footer className="usa-footer">
			<div className="grid-container usa-footer__return-to-top">
				<Link to="#top">Return to top</Link>
			</div>

			<div className="usa-footer__primary-section">
				<nav className="usa-footer__nav" aria-label="Footer navigation">
					<ul className="grid-row grid-gap">
						<li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
							<Link className="usa-footer__primary-link" to="#">
								Primary link
							</Link>
						</li>

						<li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
							<Link className="usa-footer__primary-link" to="#">
								Primary link
							</Link>
						</li>

						<li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
							<Link className="usa-footer__primary-link" to="#">
								Primary link
							</Link>
						</li>

						<li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
							<Link className="usa-footer__primary-link" to="#">
								Primary link
							</Link>
						</li>

						<li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
							<Link className="usa-footer__primary-link" to="#">
								Primary link
							</Link>
						</li>
					</ul>
				</nav>
			</div>

			<div className="usa-footer__secondary-section">
				<div className="grid-container">
					<div className="grid-row grid-gap">
						<div className="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2">
							<div className="mobile-lg:grid-col-auto">
								<img
									className="usa-footer__logo-img"
									src="/assets/img/logo-img.png"
									alt=""
								/>
							</div>

							<div className="mobile-lg:grid-col-auto">
								<p className="usa-footer__logo-heading">
									National Cancer Institute at the National Institute of Health
								</p>
							</div>
						</div>

						<div className="usa-footer__contact-links mobile-lg:grid-col-6">
							<div className="usa-footer__social-links grid-row grid-gap-1">
								<div className="grid-col-auto">
									<a
										aria-label="Facebook"
										className="usa-social-link usa-social-link--facebook"
										href="https://www.facebook.com/cancer.gov">
										<span>Facebook</span>
									</a>
								</div>

								<div className="grid-col-auto">
									<a
										aria-label="Twitter"
										className="usa-social-link usa-social-link--twitter"
										href="https://twitter.com/thenci">
										<span>Twitter</span>
									</a>
								</div>

								<div className="grid-col-auto">
									<a
										aria-label="Youtube"
										className="usa-social-link usa-social-link--youtube"
										href="https://youtube.com/NCIgov">
										<span>YouTube</span>
									</a>
								</div>

								<div className="grid-col-auto">
									<a
										aria-label="RSS"
										className="usa-social-link usa-social-link--rss"
										href="https://www.cancer.gov/syndication/rss">
										<span>RSS</span>
									</a>
								</div>
							</div>

							<h3 className="usa-footer__contact-heading">
								Agency Contact Center
							</h3>

							<address className="usa-footer__address">
								<div className="usa-footer__contact-info grid-row grid-gap">
									<div className="grid-col-auto">
										<a href="tel:1-800-555-5555">(800) 555-GOVT</a>
									</div>

									<div className="grid-col-auto">
										<a href="mailto:info@agency.gov">info@agency.gov</a>
									</div>
								</div>
							</address>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default MediumFooter;
