import Component from './usa-table--stacked.twig';
import StackedDefaultContent from './usa-table--stacked.json';
import StackedBorderlessContent from './usa-table--stacked~borderless.json';
import StackedHeaderContent from './usa-table--stacked~header.json';
import StackedHeaderBorderlessContent from './usa-table--stacked~header-borderless.json';
import css from '../index.scss';

import { table } from '@uswds-js';
import { TestCase } from '../../../../../components/test-case';

export default {
	title: 'USWDS/Components/Table/Stacked',
	args: {
		behavior: table,
	},
};

const Template = (args) => Component(args);

export const Default = () => <TestCase css={css} html={Template.bind({})(StackedDefaultContent)} />;
export const Borderless = () => <TestCase css={css} html={Template.bind({})(StackedBorderlessContent)} />;
export const WithHeader = () => <TestCase css={css} html={Template.bind({})(StackedHeaderContent)} />;
export const withHeaderBorderless = () =>
	<TestCase css={css} html={Template.bind({})(StackedHeaderBorderlessContent)} />;
