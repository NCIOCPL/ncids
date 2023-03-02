import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from "./usa-language-selector.twig";
import ComponentThreeOrMore from "./usa-language-selector--three-or-more/usa-language-selector--three-or-more.twig";
import ComponentHeader from "./usa-language-selector--header/usa-language-selector--header.twig";
import UnstyledHeader from "./usa-language-selector--unstyled/usa-language-selector--unstyled.twig";
import DefaultContent from "./usa-language-selector.json";
import ThreeOrMoreContent from "./usa-language-selector--three-or-more/usa-language-selector--three-or-more.json";
import HeaderContent from "./usa-language-selector--header/usa-language-selector--header.json";
import UnstyledContent from "./usa-language-selector--unstyled/usa-language-selector--unstyled.json";
import css from './index.scss';

export default {
  title: "USWDS/Components/Language Selector",
};

const Template = (args) => Component(args);
const ThreeOrMoreTemplate = (args) => ComponentThreeOrMore(args);
const HeaderTemplate = (args) => ComponentHeader(args);
const UnstyledTemplate = (args) => UnstyledHeader(args);

export const TwoLanguages = () => <TestCase css={css} html={Template.bind({})(DefaultContent)} />;

export const ThreeOrMoreLanguages = () => <TestCase css={css} html={ThreeOrMoreTemplate.bind({})(ThreeOrMoreContent)} />;

export const InHeaderExample = () => <TestCase css={css} html={HeaderTemplate.bind({})(HeaderContent)} />;

export const UnstyledExample = () => <TestCase css={css} html={UnstyledTemplate.bind({})(UnstyledContent)} />;
