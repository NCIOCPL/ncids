import Component from './content/button.twig';
import css from './index.scss?inline';
import iconSvg from './svg-icon';

export default {
	title: 'components/Button/Modifiers/Size/Small',
	component: Component,
	parameters: {css}
};

const buttonStyles = [
	{
		title: 'Primary',
		class: 'usa-button--nci-small'
	},
	{
		title: 'Secondary',
		class: 'usa-button--secondary usa-button--nci-small',
	},
	{
		title: 'Accent Cool',
		class: 'usa-button--accent-cool usa-button--nci-small',
	},
	{
		title: 'Accent Warm',
		class: 'usa-button--accent-warm usa-button--nci-small',
	},
	{
		title: 'Base',
		class: 'usa-button--base usa-button--nci-small',
	},
	{
		title: 'Outline',
		class: 'usa-button--outline usa-button--nci-small',
	},
	{
		title: 'Outline Secondary',
		class: 'usa-button--outline usa-button--secondary usa-button--nci-small',
	},
	{
		title: 'Outline Inverse',
		class: 'usa-button--outline usa-button--inverse usa-button--nci-small',
		containerClass: 'bg-base-darkest padding-2'
	},
	{
		title: 'Icon Left',
		class: 'usa-button--nci-icon usa-button--nci-small',
		iconSvg: iconSvg,
	},
	{
		title: 'Icon Right',
		class: 'usa-button--nci-icon usa-button--nci-icon-right usa-button--nci-small',
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

