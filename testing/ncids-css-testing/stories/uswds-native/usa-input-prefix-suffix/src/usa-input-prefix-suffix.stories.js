import React from 'react';
import { TestCase } from '../../../../components/test-case';
import prefix from "./usa-input-prefix.twig";
import suffix from "./usa-input-suffix.twig";
import css from './index.scss';

export default {
  title: "USWDS/Components/Form Inputs/Input Prefix or Suffix",
};

const PrefixTemplate = (args) => prefix(args);
const SuffixTemplate = (args) => suffix(args);

export const Prefix = () => <TestCase css={css} html={PrefixTemplate.bind({})()} />;
export const Suffix = () => <TestCase css={css} html={SuffixTemplate.bind({})()} />;
