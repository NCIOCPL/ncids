import React from 'react';
import Component from './usa-list.twig';
import css from './index.scss';

export default {
	title: 'USWDS/Components/List',
};

const Template = (args) => Component(args);

export const List = () => <TestCase css={css} html={Template.bind({})()} />;
