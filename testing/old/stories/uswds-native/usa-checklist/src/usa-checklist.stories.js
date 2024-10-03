import React from 'react';
import Component from './usa-checklist.twig';
import css from './index.scss';

export default {
	title: 'USWDS/Components/Form Inputs/Checklist',
};

const Template = (args) => Component(args);
export const Checklist = () => <TestCase css={css} html={Template.bind({})()} />;
