import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from "./usa-embed-container.twig";
import css from './index.scss';

export default {
  title: "USWDS/Components/Embed Container",
};

const Template = (args) => Component(args);

export const EmbedContainer = () => <TestCase css={css} html={Template.bind({})()} />;
