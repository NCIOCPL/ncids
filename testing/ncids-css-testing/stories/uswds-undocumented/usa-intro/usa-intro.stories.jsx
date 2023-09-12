import React from 'react';
import Component from '@nciocpl/ncids-twig/components/usa-intro/usa-intro.twig';
import { TestCase } from '../../../components/test-case';
import css from './index.scss';

// Created since USWDS does not have an example in their storybook
export default {
	title: 'USWDS/Components/Intro',
};

const Template = (args) => Component(args);

export const Default = () => <TestCase css={css} html={Template.bind({})()} />;
