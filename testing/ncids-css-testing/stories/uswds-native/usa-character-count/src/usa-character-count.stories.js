import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from "./usa-character-count.twig";
import css from './index.scss';

export default {
  title: "USWDS/Components/Form Inputs/Character Count",
};

const Template = (args) => Component(args);

export const CharacterCount = () => <TestCase css={css} html={Template.bind({})()} />;;
