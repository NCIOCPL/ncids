import React from 'react';
import { TestCase } from '../../../components/test-case';
import Component from './nci-autocomplete.twig';
import css from './nci-autocomplete.scss';

export default {
	title: 'components/Autocomplete/Test Cases',
	args: {},
};

const Template = (args) => Component(args);

export const NoJS = () => <TestCase css={css} html={Template.bind({})(
	{
  'label':'Search',
  'button':'Submit',
  },
)} />;


