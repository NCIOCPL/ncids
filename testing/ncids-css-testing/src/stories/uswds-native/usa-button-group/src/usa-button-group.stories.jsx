import Component from './usa-button-group.twig';
import { DefaultContent, SegmentedContent } from './content';
import css from './index.scss?inline';

export default {
	title: 'USWDS/Components/Button Group',
	component: Component,
	parameters: { css },
};

export const Default = { args: DefaultContent };
export const Segmented = { args: SegmentedContent };
