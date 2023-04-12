import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from './usa-table.twig';
import SortableComponent from './usa-table--sortable/usa-table--sortable.twig';
import { DefaultContent, BorderlessContent, StripedContent } from './content';
import { table } from '@uswds-js';
import css from './index.scss';

export default {
	title: 'USWDS/Components/Table',
	args: {
		behavior: table,
	},
};

const Template = (args) => Component(args);
const BorderlessTemplate = (args) => Component(args);
const StripedTemplate = (args) => Component(args);
const SortableTemplate = (args) => SortableComponent(args);

export const Default = () => <TestCase css={css} html={Template.bind({})(DefaultContent)} />;

export const Borderless= () => <TestCase css={css} html={BorderlessTemplate.bind({})(BorderlessContent)} />;

export const Segmented = () => <TestCase css={css} html={StripedTemplate.bind({})(StripedContent)} />;

export const Sortable = () => <TestCase css={css} html={SortableTemplate.bind({})()} />;
