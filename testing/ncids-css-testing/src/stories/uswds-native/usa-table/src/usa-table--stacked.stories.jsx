import Component from './usa-table--stacked/usa-table--stacked.twig';
import StackedDefaultContent from './usa-table--stacked/usa-table--stacked.json';
import StackedBorderlessContent from './usa-table--stacked/usa-table--stacked~borderless.json';
import StackedHeaderContent from './usa-table--stacked/usa-table--stacked~header.json';
import StackedHeaderBorderlessContent from './usa-table--stacked/usa-table--stacked~header-borderless.json';
import css from './index.scss?inline';

export default {
	title: 'USWDS/Components/Table/Stacked',
	component: Component,
	parameters: { css },
};

export const Default = { args: StackedDefaultContent };
export const Borderless = { args: StackedBorderlessContent };
export const WithHeader = { args: StackedHeaderContent };
export const withHeaderBorderless = { args: StackedHeaderBorderlessContent };
