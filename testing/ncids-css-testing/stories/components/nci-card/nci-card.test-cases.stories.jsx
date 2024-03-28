import React from 'react';
import { TestCase } from '../../../components/test-case';
import Component from './nci-card-section.twig';
import FloatComponent from './nci-card-float.twig';

import css from './nci-card.scss';

import img_news1_16x9 from './img/news1-16x9.jpg';
import img_news1_4x3 from './img/news1-4x3.jpg';

import img_news2_16x9 from './img/news2-16x9.jpg';
import img_news2_4x3 from './img/news2-4x3.jpg';

import img_news3_16x9 from './img/news3-16x9.jpg';
import img_news3_4x3 from './img/news3-4x3.jpg';

export default {
	title: 'components/Card/Test Cases',
	argTypes: {},
};

const Template = (args) => Component(args);

const FloatTemplate = (args) => FloatComponent(args);

export const CardGroupWithoutDescription = () => <TestCase css={css} html={Template.bind({})(
	{ 'items': [
    {
      'title': 'CRCHD Diversity Training',
      'imageSource' : img_news1_4x3,
      'imageSrc' : img_news1_16x9,
      'alt': 'CRCHD Diversity Training',
      'ariaLabel': 'Card',
      'url': 'http://cancer.gov',
    },
    {
      'title': 'Grant Application Development, Submission, Review, & Award',
      'imageSource' : img_news2_4x3,
      'imageSrc' : img_news2_16x9,
      'alt': 'Grant Application Development, Submission, Review, & Award',
      'ariaLabel': 'Card',
      'url': 'http://cancer.gov',
    },
    {
      'title': 'Capacitación en diversidad CRCHD',
      'imageSource' : img_news3_4x3,
      'imageSrc' : img_news3_16x9,
      'alt': 'Capacitación en diversidad CRCHD',
      'ariaLabel': 'Card',
      'url': 'http://cancer.gov',
    },
 ]},
)} />;

export const CardInTextLeft = () => <TestCase css={css} html={FloatTemplate.bind({})(
	{
    'modifier': 'float-left margin-bottom-5 tablet:margin-bottom-4 desktop:margin-x-5',
    'title': 'CRCHD Diversity Training',
		'description': 'Treatment for severe COVID-19 with interferons decreased the viral load of SARS-CoV-2, a new study found.',
    'imageSource' : img_news1_4x3,
    'imageSrc' : img_news1_16x9,
    'alt': 'CRCHD Diversity Training',
    'ariaLabel': 'Card',
    'url': 'http://cancer.gov',
	},
)} />;

export const CardInTextRight = () => <TestCase css={css} html={FloatTemplate.bind({})(
	{
    'modifier': 'float-right margin-bottom-5 tablet:margin-bottom-4 desktop:margin-x-5',
    'title': 'CRCHD Diversity Training',
		'description': 'Treatment for severe COVID-19 with interferons decreased the viral load of SARS-CoV-2, a new study found.',
    'imageSource' : img_news1_4x3,
    'imageSrc' : img_news1_16x9,
    'alt': 'CRCHD Diversity Training',
    'ariaLabel': 'Card',
    'url': 'http://cancer.gov',
	},
)} />;
