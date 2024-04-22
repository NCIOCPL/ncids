import React from 'react';
import { TestCase } from '../../../components/test-case';
import Component from '@nciocpl/ncids-twig/components/nci-cta-strip/nci-cta-strip.twig';
import css from './nci-cta-strip.scss';

export default {
	title: 'components/CTA Strip/Default',
	argTypes: {},
};
const Template = (args) => Component(args);

export const DefaultLong = () => <TestCase css={css} html={Template.bind({})(
	{
	"items": [
		{
			"title": "Programs",
			"url": "http://www.cancer.gov",
		},
		{
			"title": "Resources",
			"url": "http://www.google.com",
		},
		{
			"title": "Success Stories",
			"url": "http://www.msn.com",
		},
	]},
)} />;
