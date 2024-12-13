import img_hero_mobile from './img/hero-mobile.jpg';
import img_hero_mobile_lg from './img/hero-mobile-large.jpg';
import img_hero_tablet from './img/hero-tablet.jpg';
import img_hero_tablet_lg from './img/hero-tablet-large.jpg';
import img_hero_desktop from './img/hero-desktop.jpg';
import img_hero_widerscreen from './img/hero-widescreen.jpg';
import img_placeholder_16x9 from './img/16x9_placeholder.png';
import img_promo_16x9 from './img/promo-16x9.jpg';
import img_promo_1x1 from './img/promo-1x1.jpg';
import img_news1_16x9 from './img/news1-16x9.jpg';
import img_news1_4x3 from './img/news1-4x3.jpg';
import img_news2_16x9 from './img/news2-16x9.jpg';
import img_news2_4x3 from './img/news2-4x3.jpg';
import img_news3_16x9 from './img/news3-16x9.jpg';
import img_news3_4x3 from './img/news3-4x3.jpg';

const html = `
	<main id="main-content">
		<div class="usa-section usa-section--light usa-section--cgdp-no-top">
			<div class="nci-hero nci-hero--with-cta-strip">
				<picture class="nci-hero__image">
					<source media="(min-width: 1024px)" srcset="${img_hero_widerscreen}" />
					<source media="(min-width: 880px)" srcset="${img_hero_desktop}" />
					<source media="(min-width: 640px)" srcset="${img_hero_tablet_lg}" />
					<source media="(min-width: 480px)" srcset="${img_hero_tablet}" />
					<source media="(min-width: 320px)" srcset="${img_hero_mobile_lg}" />
					<img src="${img_hero_mobile}" alt="" />
				</picture>
				<div class="nci-hero__cta-container">
					<div class="nci-hero__cta nci-hero__cta--with-button">
						<h2 class="nci-hero__cta-tagline">
							NCI is the nation's leader in cancer research.
						</h2>
						<a
							href="https://www.cancer.gov"
							class="nci-hero__cta-button usa-button"
						>
							Learn More
						</a>
					</div>
				</div>
				<div
					class="nci-hero__nci-cta-strip-container"
				>
					<div class="grid-container">
						<ul class="nci-cta-strip">
							<li>
								<a href="http://www.cancer.gov" class="usa-button">Programs</a>
							</li>
							<li>
								<a href="http://www.google.com/" class="usa-button"
									>Resources</a
								>
							</li>
							<li>
								<a href="http://www.cancer.gov" class="usa-button"
									>Success Stories</a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<section class="usa-section usa-section--light">
			<div class="grid-container">
				<div class="nci-title-aligned-card-group">
					<h2 class="nci-guide-card__header">
						Patients and Caregivers, with a Title Long Enough to Wrap to a Second
						Line
					</h2>
					<div class="nci-guide-card nci-guide-card--with-image-and-description">
						<div class="nci-guide-card__wrapper">
							<picture class="nci-guide-card__image">
								<img
									src=${img_placeholder_16x9}
									alt="Patients and Caregivers Image"
								/>
							</picture>
							<div class="nci-guide-card__body">
								<p class="nci-guide-card__description">
									NCI is the nation's trusted source for cancer information. We're
									here with information about causes and risk factors, early
									detection and diagnosis, and treatment options.
								</p>
								<ul class="nci-card__button-group">
									<li>
										<a
											href="#"
											class="usa-button usa-button--outline usa-button--secondary"
											>Funding Opportunities</a
										>
									</li>
									<li>
										<a
											href="#"
											class="usa-button usa-button--outline usa-button--secondary"
											>Cancer Moonshot Funding Opportunities</a
										>
									</li>
									<li>
										<a
											href="#"
											class="usa-button usa-button--outline usa-button--secondary"
											>Funding Strategy</a
										>
									</li>
									<li>
										<a
											href="#"
											class="usa-button usa-button--outline usa-button--secondary"
											>Research Program Contacts</a
										>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<h2 class="nci-guide-card__header">Researchers</h2>
					<div class="nci-guide-card nci-guide-card--with-image-and-description">
						<div class="nci-guide-card__wrapper">
							<picture class="nci-guide-card__image">
								<img src=${img_placeholder_16x9} />
							</picture>
							<div class="nci-guide-card__body">
								<p class="nci-guide-card__description">
									Support for the best science underpins everything NCI does. NCI
									supports the best scientists and research projects through a
									rigorous grant application and peer review process.
								</p>
								<ul class="nci-card__button-group">
									<li>
										<a
											href="#"
											class="usa-button usa-button--outline usa-button--secondary"
											>Apply for a Grand</a
										>
									</li>
									<li>
										<a
											href="#"
											class="usa-button usa-button--outline usa-button--secondary"
											>Manage Your Award</a
										>
									</li>
									<li>
										<a
											href="#"
											class="usa-button usa-button--outline usa-button--secondary"
											>Grant Policies</a
										>
									</li>
									<li>
										<a
											href="#"
											class="usa-button usa-button--outline usa-button--secondary"
											>Grants and Management Contacts</a
										>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="usa-section usa-section--light" aria-labelledby="promoblock-title1">
			<div class="tablet-lg:grid-container-widescreen">
				<div
					class="nci-promo-block nci-promo-block--with-image nci-promo-block--dark"
				>
					<picture class="nci-promo-block__image">
						<source
							media="(min-width: 880px)"
							srcset=${img_promo_1x1}
						/>
						<img
							src=${img_promo_16x9}
							alt="NCI Equity and Inclusion Program"
						/>
					</picture>
					<div class="nci-promo-block__content">
						<h2 id="promoblock-title1" class="nci-promo-block__heading">
							NCI Equity and Inclusion Program
						</h2>
						<p class="nci-promo-block__text">
							NCI is committed to ending structural racism in biomedical
							research and supports the National Institutes of Health's UNITE
							initiative.
						</p>
						<a
							href="https://www.cancer.gov"
							aria-label="NCI Equity and Inclusion Program"
							class="usa-button usa-button--secondary"
						>Learn More</a>
					</div>
				</div>
			</div>
		</section>

		<section class="usa-section usa-section--light" aria-labelledby="promoblock-title2">
			<div class="tablet-lg:grid-container-widescreen">
				<div
					class="nci-promo-block nci-promo-block--with-image nci-promo-block--dark nci-alternating-right"
				>
					<picture class="nci-promo-block__image">
						<source
							media="(min-width: 880px)"
							srcset=${img_promo_1x1}
						/>
						<img
							src=${img_promo_16x9}
							alt="NCI Equity and Inclusion Program"
						/>
					</picture>
					<div class="nci-promo-block__content">
						<h2 id="promoblock-title2" class="nci-promo-block__heading">Ongoing Research Studies</h2>
						<p class="nci-promo-block__text">
							Researchers at NCI conduct studies to improve the detection,
							prevention, and treatment of cancer. Read about some of the
							ongoing studies and learn who is eligible to participate so you
							can become a partner in cancer research.
						</p>
						<a
							href="https://www.cancer.gov"
							aria-label="Ongoing Research Studies"
							class="usa-button usa-button--secondary"
							>Learn More</a
						>
					</div>
				</div>
			</div>
		</section>

	<section class="usa-section usa-section--light">
		<div class="grid-container">
			<ul class="nci-card-group">
				<li class="nci-card tablet-lg:grid-col-4">
					<a href="https://www.cancer.gov" aria-label="Card">
						<picture class="nci-card__image">
							<source
								media="(min-width: 880px)"
								srcset="${img_news1_4x3}"
							/>
							<img src="${img_news1_16x9}" />
						</picture>
						<div class="nci-card__body">
							<span class="nci-card__title">CRCHD Diversity Training</span>
							<p class="nci-card__description">
								Treatment for severe COVID-19 with interferons decreased the
								viral load of SARS-CoV-2, a new study found.
							</p>
						</div>
					</a>
				</li>
				<li class="nci-card tablet-lg:grid-col-4">
					<a href="https://www.cancer.gov" aria-label="Card">
						<picture class="nci-card__image">
							<source
							media="(min-width: 880px)"
							srcset="${img_news2_4x3}"
							/>
							<img src="${img_news2_16x9}" />
						</picture>
						<div class="nci-card__body">
							<span class="nci-card__title">
								Grant Application Development, Submission, Review, & Award
							</span>
							<p class="nci-card__description">
								In patients with certain variations in the OAS1 gene, treatment
								for severe COVID-19 with interferons decreased the
								viral load of SARS-CoV-2, a new study found.
							</p>
						</div>
					</a>
				</li>
				<li class="nci-card tablet-lg:grid-col-4">
					<a href="https://www.cancer.gov" aria-label="Card">
						<picture class="nci-card__image">
							<source
							media="(min-width: 880px)"
							srcset="${img_news3_4x3}"
							/>
							<img src="${img_news3_16x9}" />
						</picture>
						<div class="nci-card__body">
							<span class="nci-card__title">Capacitación en diversidad CRCHD</span>
							<p class="nci-card__description">
								El tratamiento para la COVID-19 grave con interferones disminuyó
								la carga viral del SARS-CoV-2, según encontró un nuevo estudio.
							</p>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</section>
`;

export default html;
