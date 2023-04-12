import React from 'react';
import { TestCase } from '../../../../../components/test-case';
import Component from './usa-table--scrollable.twig';
import { 
	ScrollableDefaultContent,
	ScrollableStripedContent,
	ScrollableCompactContent,
	ScrollableCompactStripedContent 
} from './content';
import css from '../index.scss';

export default {
	title: 'USWDS/Components/Table/Scrollable',
};

const Template = (args) => Component(args);
const ScrollableStripedTemplate = (args) => Component(args);
const ScrollableCompactTemplate = (args) => Component(args);
const ScrollableCompactStripedTemplatet = (args) => Component(args);

export const ScrollableDefault = () => <TestCase css={css} html={Template.bind({})(ScrollableDefaultContent)} />;

export const ScrollableStriped = () => <TestCase css={css} html={ScrollableStripedTemplate.bind({})(ScrollableStripedContent)} />;

export const ScrollableCompact = () => <TestCase css={css} html={ScrollableCompactTemplate.bind({})(ScrollableCompactContent)} />;

export const ScrollableCompactStriped = () => <TestCase css={css} html={ScrollableCompactStripedTemplatet.bind({})(ScrollableCompactStripedContent)} />;
