import Component from './content/section.twig';
import css from './index.scss?inline';

export default {
	title: 'Components/Section',
	component: Component,
	parameters: { css },
};


export const Default = {
	args: {
		heading: 'A default section',
		content: 'The section component visually separates your content from other parts of the page.',
	},
};

export const SectionDark = {
	args: {
		modifier: 'usa-section--dark',
		heading: 'A dark section',
		content: 'The section component visually separates your content from other parts of the page with a dark background.',
	},
};

export const SectionLight = {
	args: {
		modifier: 'usa-section--light',
		heading: 'A light section',
		content: 'The section component visually separates your content from other parts of the page with a light background.',
	},
};
