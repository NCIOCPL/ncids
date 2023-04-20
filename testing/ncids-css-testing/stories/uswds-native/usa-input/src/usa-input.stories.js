import React from 'react';
import Component from './usa-input.twig';
import { TestCase } from '../../../../components/test-case';
import css from './index.scss';

export default {
	title: 'USWDS/Components/Text Input',
};

const Template = (args) => Component(args);

export const Input = () => <TestCase css={css} html={Template.bind({})()} />;
