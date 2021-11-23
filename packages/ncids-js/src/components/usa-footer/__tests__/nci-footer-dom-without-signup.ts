export const getExampleDOMWithoutSignup = () => {
	const div = document.createElement('div');

	div.innerHTML = `
	<footer class='usa-footer usa-footer--nci-big' id='nci-footer2'>
		<div class='grid-container usa-footer__return-to-top'>
			<a href='#'>Return to top</a>
		</div>
		<div class='usa-footer__primary-section'>
			<div class='grid-container'>
				<div class='grid-row grid-gap'>
					<div class='tablet:grid-col-8'>
						<nav class='usa-footer__nav' aria-label='Footer navigation'>
							<div class='grid-row grid-gap-4'>
								<div class='mobile-lg:grid-col-6 desktop:grid-col-4'>
									<section class='usa-footer__primary-content usa-footer__primary-content--collapsible hidden '>
										<h4>
											<button
												aria-expanded='false'
												aria-controls='accordion1'
												class='usa-button usa-button--unstyled usa-footer__primary-link usa-footer__nci-primary-link--accordion-header'>
												Primary link 1
											</button>
											<span
												class='usa-footer__primary-link usa-footer__nci-primary-link--list-header'>Primary link 1</span>
										</h4>
										<ul
											id='accordion1'
											aria-label='Primary link 1'
											class='usa-list usa-list--unstyled'>
											<li class='usa-footer__secondary-link'>
												<a href='/'>Secondary link 1</a>
											</li>
											<li class='usa-footer__secondary-link'>
												<a href='/'>Secondary link 2</a>
											</li>
											<li class='usa-footer__secondary-link'>
												<a href='/'>
													Secondary link that's a bit longer than most of the
													others
												</a>
											</li>
											<li class='usa-footer__secondary-link'>
												<a href='/'>Secondary link 4</a>
											</li>
										</ul>
									</section>
								</div>
								<div class='mobile-lg:grid-col-6 desktop:grid-col-4'>
									<section class='usa-footer__primary-content usa-footer__primary-content--collapsible hidden '>
										<h4>
											<button
												aria-expanded='false'
												aria-controls='accordion2'
												class='usa-button usa-button--unstyled usa-footer__primary-link usa-footer__nci-primary-link--accordion-header'>
												Primary link 2
											</button>
											<span
												class='usa-footer__primary-link usa-footer__nci-primary-link--list-header'>Primary link 2</span>
										</h4>
										<ul
											id='accordion2'
											aria-label='Primary link 2'
											class='usa-list usa-list--unstyled'>
											<li class='usa-footer__secondary-link'>
												<a href='/'>Secondary link 5</a>
											</li>
											<li class='usa-footer__secondary-link'>
												<a href='/'>
													Secondary link that's pretty long
												</a>
											</li>
											<li class='usa-footer__secondary-link'>
												<a href='/'>Secondary link 7</a>
											</li>
											<li class='usa-footer__secondary-link'>
												<a href='/'>Secondary link 8</a>
											</li>
										</ul>
									</section>
								</div>
								<div class='mobile-lg:grid-col-6 desktop:grid-col-4'>
									<section class='usa-footer__primary-content usa-footer__primary-content--collapsible hidden '>
										<h4>
											<button
												aria-expanded='false'
												aria-controls='accordion3'
												class='usa-button usa-button--unstyled usa-footer__primary-link usa-footer__nci-primary-link--accordion-header'>
												Primary link 3
											</button>
											<span
												class='usa-footer__primary-link usa-footer__nci-primary-link--list-header'>Primary link 3</span>
										</h4>
										<ul
											id='accordion3'
											aria-label='Primary link 3'
											class='usa-list usa-list--unstyled'>
											<li class='usa-footer__secondary-link'>
												<a href='/'>Secondary link 9</a>
											</li>
											<li class='usa-footer__secondary-link'>
												<a href='/'>Secondary link 10</a>
											</li>
											<li class='usa-footer__secondary-link'>
												<a href='/'>Secondary link 11</a>
											</li>
											<li class='usa-footer__secondary-link'>
												<a href='/'>Secondary link 12</a>
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
		<div class='usa-footer__secondary-section'>
			<div class='grid-container'>
				<div class='grid-row grid-gap'>
					<div class=' usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2 '>
						<div class='mobile-lg:grid-col-auto mobile-lg:margin-bottom-3'>
							<p class='usa-footer__logo-heading'>
								<span class='logo__agency-name'>
									National Cancer Institute
								</span>
								<span class='logo__parent-organization'>
									at the National Institute of Health
								</span>
							</p>
						</div>
					</div>
					<div class='usa-footer__contact-links mobile-lg:grid-col-6'>
						<h3 class='usa-footer__contact-heading'>Contact Us</h3>
						<div class='usa-footer__address'>
							<div class='usa-footer__contact-info grid-row grid-gap'>
								<div class='tablet:grid-col-auto'>
									<a href='tel:1-800-4-CANCER'>Live Chat</a>
								</div>
								<div class='tablet:grid-col-auto tablet:margin-left-2'>
									<a href='tel:1-800-4-CANCER'>1-800-4-CANCER</a>
								</div>
								<div class='tablet:grid-col-auto tablet:margin-left-2'>
									<a href='mailto:NCIinfo@nih.gov'>NCIinfo@nih.gov</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class='grid-row grid-gap'>
					<div class='usa-footer__social-links mobile-lg:grid-col-6'>
						<h3 class='usa-footer__social-heading'>Follow us</h3>
						<div class='grid-row grid-gap-1 nci-big__social'>
							<div class='grid-col-auto'>
								<a
									aria-label='Facebook'
									class='usa-social-link usa-social-link--facebook'
									href='https://www.facebook.com/cancer.gov'>
									f
								</a>
							</div>
							<div class='grid-col-auto'>
								<a
									aria-label='Twitter'
									class='usa-social-link usa-social-link--twitter'
									href='https://twitter.com/thenci'>
									t
								</a>
							</div>
							<div class='grid-col-auto'>
								<a
									aria-label='Youtube'
									class='usa-social-link usa-social-link--youtube'
									href='https://youtube.com/NCIgov'>
									y
								</a>
							</div>
							<div class='grid-col-auto'>
								<a aria-label='RSS' class='usa-social-link usa-social-link--rss'
									 href='https://www.cancer.gov/syndication/rss'>
									r
								</a>
							</div>
						</div>
					</div>
					<div class='usa-footer__contact-links mobile-lg:grid-col-6'>
						<div class='usa-footer__address height-full'>
							<div class='usa-footer__contact-info grid-row grid-gap height-full'>
								<address class='mobile-lg:margin-x-2'>
									<a href='https://www.hhs.gov/'>
										U.S. Department of Health and Human Services
									</a>
									<a href='https://www.nih.gov/'>
										National Institutes of Health
									</a>
									<a href='https://www.cancer.gov/'>
										National Cancer Institute
									</a>
									<a href='https://usa.gov/'>USA.gov</a>
								</address>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
	`;

	return div;
};
