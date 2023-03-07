import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-guide-card.scss';

import img_placeholder_16x9 from './img/16x9_placeholder.png';

const html = `
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
`;

export const GuideCardWithImageAndDescription = () => (
	<TestCase css={css} html={html} />
);
