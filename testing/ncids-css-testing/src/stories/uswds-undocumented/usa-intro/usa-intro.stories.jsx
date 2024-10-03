import Component from '@nciocpl/ncids-twig/components/usa-intro/usa-intro.twig';
import css from './index.scss?inline';

// Created since USWDS does not have an example in their storybook
export default {
	title: 'USWDS/Components/Intro',
	component: Component,
	parameters: {css}
};

export const Default = {};
