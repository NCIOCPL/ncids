import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from "./usa-media-block.twig";
import Content from "./usa-media-block.json";
import css from './index.scss';

export default {
  title: "USWDS/Components/Media Block",
};

const Template = (args) => Component(args);

export const MediaBlock = () => <TestCase css={css} html={Template.bind({})(Content)} />;
