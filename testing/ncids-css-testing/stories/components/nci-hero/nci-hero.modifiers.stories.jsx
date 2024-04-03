import React from 'react';
import { TestCase } from '../../../components/test-case';
import Component from '@nciocpl/ncids-twig/components/nci-hero/nci-hero.twig';
import css from './nci-hero.scss';

const Template = (args) => Component(args);

import img_hero_mobile from './img/hero-mobile.jpg';
import img_hero_mobile_lg from './img/hero-mobile-large.jpg';
import img_hero_tablet from './img/hero-tablet.jpg';
import img_hero_tablet_lg from './img/hero-tablet-large.jpg';
import img_hero_desktop from './img/hero-desktop.jpg';
import img_hero_widescreen from './img/hero-widescreen.jpg';

export default {
	title: 'components/Hero/Modifiers/Dark',
	argTypes: {},
};

export const WithoutButton = () => <TestCase css={css} html={Template.bind({})(
	{
		'image': {
			'widescreen': img_hero_widescreen,
			'desktop': img_hero_desktop,
			'tablet_lg': img_hero_tablet_lg,
			'tablet': img_hero_tablet,
			'mobile_lg': img_hero_mobile_lg,
			'mobile': img_hero_mobile,
		},
		'alt': 'NCI is the nation&apos;s leader in cancer research.',
		'tagline': 'NCI is the nation&apos;s leader in cancer research.',
		'modifier': 'nci-hero__cta--dark',
	},
)} />;

export const WithButton = () => <TestCase css={css} html={Template.bind({})(
	{
		'image': {
			'widescreen': img_hero_widescreen,
			'desktop': img_hero_desktop,
			'tablet_lg': img_hero_tablet_lg,
			'tablet': img_hero_tablet,
			'mobile_lg': img_hero_mobile_lg,
			'mobile': img_hero_mobile,
		},
		'alt': 'NCI is the nation&apos;s leader in cancer research.',
		'tagline': 'NCI is the nation&apos;s leader in cancer research.',
		'modifier': 'nci-hero__cta--dark',
        'button': 'Learn More',
		'url': 'http://www.cancer.gov',
	},
)} />;
