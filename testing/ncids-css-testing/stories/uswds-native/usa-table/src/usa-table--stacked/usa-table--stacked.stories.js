import React from 'react';
import { TestCase } from '../../../../../components/test-case';
import Component from './usa-table--stacked.twig';
import { 
	StackedDefaultContent, 
	StackedBorderlessContent, 
	StackedHeaderContent, 
	StackedHeaderBorderlessContent } from '../content';
import css from '../index.scss';

export default {
	title: 'USWDS/Components/Table/Stacked',
};

const Template = (args) => Component(args);
const StackedBorderlessTemplate = (args) => Component(args);
const StackedHeaderTemplate = (args) => Component(args);
const StackedHeaderBorderlessTemplate = (args) => Component(args);

export const StackedDefault = () => <TestCase css={css} html={Template.bind({})(StackedDefaultContent)} />;

export const StackedBorderless = () => <TestCase css={css} html={StackedBorderlessTemplate.bind({})(StackedBorderlessContent)} />;

export const StackedHeader = () => <TestCase css={css} html={StackedHeaderTemplate.bind({})(StackedHeaderContent)} />;

export const StackedHeaderBorderless = () => <TestCase css={css} html={StackedHeaderBorderlessTemplate.bind({})(StackedHeaderBorderlessContent)} />;
