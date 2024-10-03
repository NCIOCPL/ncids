import Component from './content/button.twig';
import css from './index.scss?inline';
import iconSvg from './svg-icon';

export default {
	title: 'components/Button/Modifiers/Size/Big',
	component: Component,
	parameters: {css}
};

const buttonStyles = [
	{
		title: 'Primary',
		class: 'usa-button--big'
	},
	{
		title: 'Secondary',
		class: 'usa-button--secondary usa-button--big',
	},
	{
		title: 'Accent Cool',
		class: 'usa-button--accent-cool usa-button--big',
	},
	{
		title: 'Accent Warm',
		class: 'usa-button--accent-warm usa-button--big',
	},
	{
		title: 'Base',
		class: 'usa-button--base usa-button--big',
	},
	{
		title: 'Outline',
		class: 'usa-button--outline usa-button--big',
	},
	{
		title: 'Outline Secondary',
		class: 'usa-button--outline usa-button--secondary usa-button--big',
	},
	{
		title: 'Outline Inverse',
		class: 'usa-button--outline usa-button--inverse usa-button--big',
		containerClass: 'bg-base-darkest padding-2'
	},
	{
		title: 'Icon Left',
		class: 'usa-button--nci-icon usa-button--big',
		iconSvg: iconSvg,
	},
	{
		title: 'Icon Right',
		class: 'usa-button--nci-icon usa-button--nci-icon-right usa-button--big',
		iconSvg: iconSvg,
	},
];

const anchors = buttonStyles.map((button) => ({...button, type: 'a'}));
export const Anchor = {
	args: { buttons: anchors }
};

const buttons = buttonStyles.map((button) => ({...button, type: 'button'}));
export const Button = {
	args: { buttons: buttons }
};
