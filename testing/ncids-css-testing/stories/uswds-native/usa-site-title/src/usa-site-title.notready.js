import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from "./usa-site-title.twig";
import Content from "./usa-site-title.json";
import css from './index.scss';

export default {
  title: "USWDS/Components/Site Title",
};

const Template = (args) => Component(args);

export const SiteTitle = Template.bind({});
SiteTitle.args = Content;
