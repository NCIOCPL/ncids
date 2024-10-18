import React from 'react';
import { TestCase } from '../../../components/test-case';
import Component from '@nciocpl/ncids-twig/components/nci-guide-card/nci-guide-card.twig';
import ComponentGroup from '@nciocpl/ncids-twig/components/nci-guide-card/nci-guide-card-group.twig';
import css from './nci-guide-card.scss';

export default {
	title: 'components/Guide Card/Default',
	argTypes: {},
};

const Template = (args) => Component(args);

export const Default = () => (
	<TestCase
		css={css}
		html={Template.bind({})({
			title: 'Research Grant Funding',
			cardId: 'default-card',
			'modifier': 'desktop:grid-col-4',
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

const TemplateGroup = (args) => ComponentGroup(args);

export const CardGroup = () => (
	<TestCase
		css={css}
		html={TemplateGroup.bind({})({
			'header': 'Your Guide to NCI Grants &amp; Training',
			'cards': [
				{
					'title': 'Research Grant Funding',
					cardId: 'card-group-research-funding',
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
					'title': 'Grants Process',
					cardId: 'card-group-grants-process',
					'buttongroup': [
						{
							'title': 'Apply for a Grant',
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
				{
					'title': 'Funding for Training',
					cardId: 'card-group-training',
					'buttongroup': [
						{
							'title': 'Funding for Cancer Training',
							'url': 'http://cancer.gov',
						},
						{
							'title': 'Research Training at NCI',
							'url': 'http://cancer.gov',
						},
						{
							'title': 'Building a Diverse Workforce',
							'url': 'http://cancer.gov',
						},
						{
							'title': 'Training Program Contacts',
							'url': 'http://cancer.gov',
						},
					],
				},
			]
		})}
	/>
);
