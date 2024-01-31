import React from 'react';
import Component from './form-elements.twig';
import { TestCase } from '../../../components/test-case';
import css from './index.scss';

export default {
	title: 'Components/Forms',
};

const Template = (args) => Component(args);

export const FormElements = () => <TestCase css={css} html={Template.bind({})()} />;
