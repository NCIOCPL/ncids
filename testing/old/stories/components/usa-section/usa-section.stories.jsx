import Component from '../usa-button/content/button.twig';
import css from '../usa-button/usa-button.scss';

export default {
	title: 'components/usa-section',
	component: Component,
	parameters: {css}
};

export * from './section-dark.stories';
export * from './section-light.stories';
export * from './default.stories';
