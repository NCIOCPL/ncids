import Component from './content/button.twig';
import css from './index.scss?inline';

export default {
	title: 'components/Button/Modifiers/Full Width',
	component: Component,
	parameters: {css}
};

const buttonStyles = [
	{
		title: 'Primary',
		class: 'usa-button--nci-full-width',
	},
	{
		title: 'Secondary',
		class: 'usa-button--secondary usa-button--nci-full-width',
	},
	{
		title: 'Accent Cool',
		class: 'usa-button--accent-cool usa-button--nci-full-width',
	},
	{
		title: 'Accent Warm',
		class: 'usa-button--accent-warm usa-button--nci-full-width',
	},
	{
		title: 'Base',
		class: 'usa-button--base usa-button--nci-full-width',
	},
	{
		title: 'Outline',
		class: 'usa-button--outline usa-button--nci-full-width',
	},
	{
		title: 'Outline Secondary',
		class: 'usa-button--outline usa-button--secondary usa-button--nci-full-width',
	},
	{
		title: 'Outline Inverse',
		class: 'usa-button--outline usa-button--inverse usa-button--nci-full-width',
		containerClass: 'bg-base-darkest padding-2'
	},
];

const anchors = buttonStyles.map((button) => ({ ...button, type: 'a' }));
export const Anchor = {
	args: { buttons: anchors }
};

const buttons = buttonStyles.map((button) => ({ ...button, type: 'button' }));
export const Button = {
	args: { buttons: buttons }
};
