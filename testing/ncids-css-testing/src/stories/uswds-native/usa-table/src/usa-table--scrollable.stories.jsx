import Component from './usa-table--scrollable/usa-table--scrollable.twig';
import ScrollableDefaultContent from './usa-table--scrollable/usa-table--scrollable.json';
import ScrollableStripedContent from './usa-table--scrollable/usa-table--scrollable~striped.json';
import ScrollableCompactContent from './usa-table--scrollable/usa-table--scrollable~compact.json';
import ScrollableCompactStripedContent from './usa-table--scrollable/usa-table--scrollable~compact-striped.json';
import css from './index.scss?inline';

export default {
	title: 'USWDS/Components/Table/Scrollable',
	component: Component,
	parameters: { css },
};

export const Default = { args: ScrollableDefaultContent };
export const Striped = { args: ScrollableStripedContent };
export const Compact = { args: ScrollableCompactContent };
export const CompactStriped = { args: ScrollableCompactStripedContent };
