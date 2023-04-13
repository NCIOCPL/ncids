import React from 'react';
import Component from '@nciocpl/ncids-twig/components/usa-intro/usa-intro.twig';
import { TestCase } from '../../../components/test-case';
import css from './index.scss';

export default {
  title: 'components/usa-intro',
};

const Template = (args) => Component(args);

export const Default = () => <TestCase css={css} html={Template.bind({})()} />;
