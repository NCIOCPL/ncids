// Bryan said call it "inner" or "content" so why not both
import Component from '../../components/usa-button/content/button.twig';
import css from '../../components/usa-button/usa-button.scss';

export default {
	title: 'templates/inner-content',
	component: Component,
	parameters: {css}
};

export * from './default.stories';
export * from './default-expanded-nav.stories';
