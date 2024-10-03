import React from 'react';
import Component from './nci-autocomplete.twig';
import css from './nci-autocomplete.scss';

export default {
	title: 'components/Autocomplete/Test Cases',
	parameters: {css}
};

const Template = (args) => Component(args);

export const NoJS = () => <TestCase css={css} html={Template.bind({})(
	{
  'label':'Search',
  'button':'Submit',
  },
)} />;


