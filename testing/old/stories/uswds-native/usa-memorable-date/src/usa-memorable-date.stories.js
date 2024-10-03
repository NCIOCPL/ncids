import React from 'react';
import Component from "./usa-memorable-date.twig";
import css from './index.scss';

export default {
	title: 'USWDS/Components/Form Inputs/Memorable Date',
};

const Template = (args) => Component(args);

export const MemorableDate = () => <TestCase css={css} html={Template.bind({})()} />;
