import Component from '@nciocpl/ncids-twig/components/nci-hero/nci-hero.twig';
import css from './index.scss?inline';

import img_hero_mobile from './img/hero-mobile.jpg';
import img_hero_mobile_lg from './img/hero-mobile-large.jpg';
import img_hero_tablet from './img/hero-tablet.jpg';
import img_hero_tablet_lg from './img/hero-tablet-large.jpg';
import img_hero_desktop from './img/hero-desktop.jpg';
import img_hero_widescreen from './img/hero-widescreen.jpg';

export default {
	title: 'components/Hero/Test Cases/With CTA',
	component: Component,
	parameters: { css },
};

export const WithCtaLong = {
	args: {
		'image': {
			'widescreen': img_hero_widescreen,
			'desktop': img_hero_desktop,
			'tablet_lg': img_hero_tablet_lg,
			'tablet': img_hero_tablet,
			'mobile_lg': img_hero_mobile_lg,
			'mobile': img_hero_mobile,
		},
		'alt': 'NCI is the nation&apos;s leader in cancer research.',
		'tagline': 'Funding for small businesses with next-generation cancer technologies.',
		'button': 'Learn More With A Long Text Link',
		'url': 'http://www.cancer.gov',
		'ctastrip': [
			{
				'title': 'NCI Alliance for Nanotechnology in Cancer',
				'url': 'http://www.cancer.gov',
			},
			{
				'title': 'Nanotechnology Characterization Laboratory',
				'url': 'http://www.cancer.gov',
			},
			{
				'title': 'Cancer Nanotechnology Plan',
				'url': 'http://www.cancer.gov',
			},
		],
	},
};

export const WithCtaSpanish = {
	args: {
		'image': {
			'widescreen': img_hero_widescreen,
			'desktop': img_hero_desktop,
			'tablet_lg': img_hero_tablet_lg,
			'tablet': img_hero_tablet,
			'mobile_lg': img_hero_mobile_lg,
			'mobile': img_hero_mobile,
		},
		'alt': 'El NCI es el líder nacional de investigación del cáncer',
		'tagline': 'El NCI es el líder nacional de investigación del cáncer',
		'button': 'Aprende más',
		'url': 'http://www.cancer.gov',
		'ctastrip': [
			{
				'title': 'El NCI para la Nanotecnología en el Cáncer',
				'url': 'http://www.cancer.gov',
			},
			{
				'title': 'Laboratorio de Caracterización de Nanotecnología',
				'url': 'http://www.cancer.gov',
			},
			{
				'title': 'Plan de Nanotecnología del Cáncer',
				'url': 'http://www.cancer.gov',
			},
		],
	},
};

export const WithCtaExternalLinks = {
	args: {
		'image': {
			'widescreen': img_hero_widescreen,
			'desktop': img_hero_desktop,
			'tablet_lg': img_hero_tablet_lg,
			'tablet': img_hero_tablet,
			'mobile_lg': img_hero_mobile_lg,
			'mobile': img_hero_mobile,
		},
		'alt': 'NCI is the nation&apos;s leader in cancer research.',
		'tagline': 'Funding for small businesses with next-generation cancer technologies.',
		'button': 'Learn More',
		'url': 'http://www.cancer.gov',
		'ctastrip': [
			{
				'title': 'Link to Google',
				'url': 'http://www.google.com',
				'ariaLabel': 'External Link Example',
			},
			{
				'linkMarkedInternal': 'data-ncids-internal-link',
				'title': 'Override External Link Icon',
				'url': 'http://www.google.com',
				'ariaLabel': 'Override External to Not Show Icon',
			},
			{
				'title': 'Add External Icon to Internal Link',
				'url': 'http://www.cancer.gov',
				'ariaLabel': 'Override Internal to Show External',
				'modifier': 'usa-button--external',
			},
		],
	},
};
