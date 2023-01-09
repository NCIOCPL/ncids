import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-guide-card.scss';

const html = `
<div class="usa-section" style="background:#eee">
	<div class="grid-container">
		<h2 class="nci-guide-card__header">Your Guide to NCI Grants &amp; Training</h2>

		<ul class="nci-card-group">
			<li class="nci-guide-card">
				<div class="nci-guide-card__wrapper">
					<div class="nci-guide-card__body">
						<h2 class="nci-guide-card__title">Research Grant Funding</h2>
						<ul class="nci-card__button-group">
							<li><a href="#" class="usa-button usa-button--outline usa-button--secondary">Funding Opportunities</a></li>
							<li><a href="#" class="usa-button usa-button--outline usa-button--secondary">Cancer Moonshot Funding Opportunities</a></li>
							<li><a href="#" class="usa-button usa-button--outline usa-button--secondary">Funding Strategy</a></li>
							<li><a href="#" class="usa-button usa-button--outline usa-button--secondary">Research Program Contacts</a></li>
						</ul>
					</div>
				</div>
			</li>

			<li class="nci-guide-card">
				<div class="nci-guide-card__wrapper">
					<div class="nci-guide-card__body">
						<h2 class="nci-guide-card__title">Grants Process</h2>
						<ul class="nci-card__button-group">
							<li><a href="#" class="usa-button usa-button--outline usa-button--secondary">Apply for a Grand</a></li>
							<li><a href="#" class="usa-button usa-button--outline usa-button--secondary">Manage Your Award</a></li>
							<li><a href="#" class="usa-button usa-button--outline usa-button--secondary">Grant Policies</a></li>
							<li><a href="#" class="usa-button usa-button--outline usa-button--secondary">Grants and Management Contacts</a></li>
						</ul>
					</div>
				</div>
			</li>

			<li class="nci-guide-card">
				<div class="nci-guide-card__wrapper">
					<div class="nci-guide-card__body">
						<h2 class="nci-guide-card__title">Funding for Training</h2>
						<ul class="nci-card__button-group">
							<li><a href="#" class="usa-button usa-button--outline usa-button--secondary">Funding for Cancer Training</a></li>
							<li><a href="#" class="usa-button usa-button--outline usa-button--secondary">Research Training at NCI</a></li>
							<li><a href="#" class="usa-button usa-button--outline usa-button--secondary">Building a Diverse Workforce</a></li>
							<li><a href="#" class="usa-button usa-button--outline usa-button--secondary">Training Program Contacts</a></li>
						</ul>
					</div>
				</div>
			</li>
		</ul>
	</div>
</div>
`;

export const GuideCardRow = () => <TestCase css={css} html={html} />;
