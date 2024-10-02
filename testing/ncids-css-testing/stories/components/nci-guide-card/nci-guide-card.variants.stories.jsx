import React from 'react';
import { TestCase } from '../../../components/test-case';
import Component from '@nciocpl/ncids-twig/components/nci-guide-card/nci-guide-card.twig';
import ComponentTiled from '@nciocpl/ncids-twig/components/nci-guide-card/nci-guide-card-tile-aligned.twig';
import css from './nci-guide-card.scss';

import img_placeholder_16x9 from './img/16x9_placeholder.png';

export default {
	title: 'components/Guide Card/Variants/Guide Card With Image and Description',
	argTypes: {},
};

const Template = (args) => Component(args);

export const SingleGuideCardWithImageAndDescriptionWithoutHeading = () => (
	<TestCase
		css={css}
		html={Template.bind({})({
			'image': img_placeholder_16x9,
			'cardId': 'guide-card-image-and-description',
			'altText': 'Grants and Research',
			'modifier': 'nci-guide-card--with-image-and-description',
			'description': 'NCI is the nation&apos;s trusted source for cancer information. We&apos;re here with information about causes and risk factors, early detection and diagnosis, and treatment options.',
			'buttongroup': [
				{
					'title': 'Funding Opportunities',
					'url': 'http://cancer.gov',
				},
				{
					'title': 'Cancer Moonshot Funding Opportunities',
					'url': 'http://cancer.gov',
				},
				{
					'title': 'Funding Strategy',
					'url': 'http://cancer.gov',
				},
				{
					'title': 'Research Program Contacts',
					'url': 'http://cancer.gov',
				},
			],
		})}
	/>
);

const TemplateTiled = (args) => ComponentTiled(args);

export const TitleAlignedCardGroup = () => (
	<TestCase
		css={css}
		html={TemplateTiled.bind({})({
			'cards': [
				{
					'header': 'Patients and Caregivers, with a Title Long Enough to Wrap to a Second Line',
					'image': img_placeholder_16x9,
					'cardId': 'guide-caregivers',
					'altText': 'Patients and Caregivers',
					'modifier': 'nci-guide-card--with-image-and-description',
					'description': 'NCI is the nation&apos;s trusted source for cancer information. We&apos;re here with information about causes and risk factors, early detection and diagnosis, and treatment options.',
					'buttongroup': [
						{
							'title': 'Funding Opportunities',
							'url': 'http://cancer.gov',
						},
						{
							'title': 'Cancer Moonshot Funding Opportunities',
							'url': 'http://cancer.gov',
						},
						{
							'title': 'Funding Strategy',
							'url': 'http://cancer.gov',
						},
						{
							'title': 'Research Program Contacts',
							'url': 'http://cancer.gov',
						},
					],
				},
				{
					'header': 'Researchers',
					'image': img_placeholder_16x9,
					'altText': 'Researchers',
					'cardId': 'guide-card-researchers',
					'modifier': 'nci-guide-card--with-image-and-description',
					'description': 'Support for the best science underpins everything NCI does. NCI supports the best scientists and research projects through a rigorous grant application and peer review process.',
					'buttongroup': [
						{
							'title': 'Apply for a Grand',
							'url': 'http://cancer.gov',
						},
						{
							'title': 'Manage Your Award',
							'url': 'http://cancer.gov',
						},
						{
							'title': 'Grant Policies',
							'url': 'http://cancer.gov',
						},
						{
							'title': 'Grants and Management Contacts',
							'url': 'http://cancer.gov',
						},
					],
				},
			]
		})}
	/>
);

