import Component from './content/button.twig';
import css from './index.scss?inline';

export default {
	title: 'components/Button/Test Cases/Unsupported',
	component: Component,
	parameters: { css },
};

export const OutlineColors = {
	args: {
		buttons: [
			{
				title: 'Accent Cool',
				class: 'usa-button--outline usa-button--accent-cool',
				type: 'button',
			},
			{
				title: 'Accent Warm',
				class: 'usa-button--outline usa-button--accent-warm',
				type: 'button',
			},
			{
				title: 'Base',
				class: 'usa-button--outline usa-button--base',
				type: 'button',
			},
		],
	},
};
