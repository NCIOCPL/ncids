import React from 'react';
import { TestCase } from '../../../components/test-case';
import Component from '@nciocpl/ncids-twig/components/nci-card/nci-card.twig';
import css from './nci-card.scss';

import img_4x3 from './img/news1-4x3.jpg';
import img_16x9 from './img/news1-16x9.jpg';

export default {
	title: 'components/nci-card',
	argTypes: {},
};

const Template = (args) => Component(args);

export const Default = () => <TestCase css={css} html={Template.bind({})(
	{
		label: 'Feature Card',
		title: 'CRCHD Diversity Training',
		description: 'Treatment for severe COVID-19 with interferons decreased the viral load of SARS-CoV-2, a new study found.',
		img_4x3: img_4x3,
		img_16x9: img_16x9,
	},
)} />;
