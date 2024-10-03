import Component from './usa-table.twig';
import DefaultContent from './usa-table.json';
import BorderlessContent from './usa-table~borderless.json';
import StripedContent from './usa-table~striped.json';
import css from './index.scss?inline';

export default {
	title: 'USWDS/Components/Table',
	component: Component,
	parameters: { css },
};

export const Default = { args: DefaultContent };
export const Borderless = { args: BorderlessContent };
export const Striped = { args: StripedContent };
