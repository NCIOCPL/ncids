import React from 'react';

import { TestCase } from '../../../components/test-case';
import Component from '@nciocpl/ncids-twig/components/usa-breadcrumb/usa-breadcrumb.twig';

import { VeryLongContent } from './content';
import css from './breadcrumb.scss';

export default {
	title: 'Components/Breadcrumb/Test Cases',
	args: {},
};

const Template = (args) => Component(args);
const WrapContent = { ...VeryLongContent, modifier: 'usa-breadcrumb--wrap' };

export const DefaultWithVeryLongContent = () => (
	<TestCase css={css} html={Template.bind({})(VeryLongContent)} />
);

export const WrapWithVeryLongContent = () => (
	<TestCase css={css} html={Template.bind({})(WrapContent)} />
);
