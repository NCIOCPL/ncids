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
				'url': 'http://www.google.com',
			},
			{
				'title': 'Cancer Nanotechnology Plan',
				'url': 'http://www.msn.com',
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
				'url': 'http://www.google.com',
			},
			{
				'title': 'Plan de Nanotecnología del Cáncer',
				'url': 'http://www.msn.com',
			},
		],
	},
};
