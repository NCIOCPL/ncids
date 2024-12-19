import Component from '@nciocpl/ncids-twig/components/nci-cta-strip/nci-cta-strip.twig';
import css from './index.scss?inline';

export default {
	title: 'Components/CTA Strip/Test Cases',
	component: Component,
	parameters: { css },
};

export const DefaultLong = {
	args: {
		'items': [
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

export const DefaultSpanish = {
	args: {
		'items': [
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

export const DefaultExternalLinks = {
	args: {
		'items': [
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
