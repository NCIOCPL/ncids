import Component from './content/button.twig';
import css from './index.scss?inline';

export default {
	title: 'components/Button/Variants/Unstyled',
	component: Component,
	parameters: {css}
};

const buttonStyles = [
	{
		title: 'Primary',
		class: 'usa-button--unstyled',
		containerClass: 'ncisb-flex-gap',
	},
	{
		title: 'Big',
		class: 'usa-button--unstyled usa-button--big',
		containerClass: 'ncisb-flex-gap',
	},
	{
		title: 'Small',
		class: 'usa-button--unstyled usa-button--nci-small',
		containerClass: 'ncisb-flex-gap',
	},
	{
		title: 'Full Width',
		class: 'usa-button--unstyled usa-button--nci-full-width',
		containerClass: 'ncisb-flex-gap',
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
