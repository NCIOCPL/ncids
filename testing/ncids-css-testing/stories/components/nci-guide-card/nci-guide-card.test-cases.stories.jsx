import React from 'react';
import { TestCase } from '../../../components/test-case';
import Component from '@nciocpl/ncids-twig/components/nci-guide-card/nci-guide-card.twig';
import ComponentTiled from '@nciocpl/ncids-twig/components/nci-guide-card/nci-guide-card-tile-aligned.twig';

import css from './nci-guide-card.scss';

import img_placeholder_16x9 from './img/16x9_placeholder.png';

export default {
	title: 'components/Guide Card/Test Cases',
	argTypes: {},
};

const Template = (args) => Component(args);

export const GuideWithImageAndDescriptionWithoutImage = () => (
	<TestCase
		css={css}
		html={Template.bind({})({
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

export const GuideCardWithImageAndDescriptionWithoutDescription = () => (
	<TestCase
		css={css}
		html={Template.bind({})({
			'modifier': 'nci-guide-card--with-image-and-description',
			'image': img_placeholder_16x9,
			'altText': 'Grants and Research',
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

export const TitleAlignedCardGroupWithoutDescription = () => (
	<TestCase
		css={css}
		html={TemplateTiled.bind({})({
			'cards': [
				{
					'header': 'Patients and Caregivers, with a Title Long Enough to Wrap to a Second Line',
					'image': img_placeholder_16x9,
					'altText': 'Patients and Caregivers',
					'modifier': 'nci-guide-card--with-image-and-description',
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
					'modifier': 'nci-guide-card--with-image-and-description',
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

export const TitleAlignedCardGroupWithoutImage = () => (
	<TestCase
		css={css}
		html={TemplateTiled.bind({})({
			'cards': [
				{
					'header': 'Patients and Caregivers, with a Title Long Enough to Wrap to a Second Line',
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
