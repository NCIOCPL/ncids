import Component from './usa-tag.twig';
import css from './index.scss?inline';
import { DefaultContent, BigContent } from './content';

export default {
	title: 'USWDS/Components/Tags',
	component: Component,
	parameters: { css },
};

export const Default = { args: DefaultContent };
export const Big = { args: BigContent };
