import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from '@nciocpl/ncids-css/uswds-packages/usa-list/src/usa-list.twig';
import css from './index.scss';

export default {
	title: 'Components/usa-list/Test Cases',
};

const Template = (args) => Component(args);

export const USWDS = () => <TestCase css={css} html={Template.bind({})()} />;
