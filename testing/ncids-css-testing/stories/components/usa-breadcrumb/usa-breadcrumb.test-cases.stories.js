import React from 'react';

import { TestCase } from '../../../components/test-case';
import DefaultComponent from './usa-breadcrumb--default.twig';
import WrapComponent from './usa-breadcrumb--wrap.twig';
import css from './breadcrumb.scss';

export default {
	title: 'Components/Breadcrumb/Test Cases',
};


export const Default = () => <TestCase css={css} html={DefaultComponent.bind({})()} />;

export const Wrap = () => <TestCase css={css} html={WrapComponent.bind({})()} />;
