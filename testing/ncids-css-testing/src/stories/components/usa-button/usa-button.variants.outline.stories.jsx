import Component from './content/button.twig';
import css from './index.scss?inline';

export default {
	title: 'components/Button/Variants/Outline',
	component: Component,
	parameters: {css}
};

const buttonStyles = [
	{
		title: 'Primary',
		class: 'usa-button--outline',
	},
	{
		title: 'Secondary',
		class: 'usa-button--outline usa-button--secondary',
	},
	{
		title: 'Outline Inverse',
		class: 'usa-button usa-button--outline usa-button--inverse',
		containerClass: 'bg-base-darkest padding-2',
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
