import Component from './content/button.twig';
import css from './index.scss?inline';

export default {
	title: 'Components/Button/Default',
	component: Component,
	parameters: {css}
};

const buttonStyles = [
	{
		title: 'Primary',
		containerClass: 'ncisb-flex-gap',
	},
	{
		title: 'Secondary',
		class: 'usa-button--secondary',
	},
	{
		title: 'Accent Cool',
		class: 'usa-button--accent-cool',
	},
	{
		title: 'Accent Warm',
		class: 'usa-button--accent-warm',
	},
	{
		title: 'Base',
		class: 'usa-button--base',
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
