import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from './usa-identifier.twig';
import {
  DefaultContent,
  EsContent,
  MultipleLogosContent,
  EsMultipleLogosContent,
  NoLogosContent,
  EsNoLogosContent,
  TaxpayerContent,
  EsTaxpayerContent,
} from './content';
import css from './index.scss';


export default {
  title: 'USWDS/Components/Identifier',
};

// Replace logo for storybook static path files
import logo from './img/circle-gray-20.svg'
DefaultContent.masthead.parent.logo = logo;
EsContent.masthead.parent.logo = logo;
MultipleLogosContent.masthead.parent.logo = logo;
MultipleLogosContent.masthead.agency.logo = logo;
EsMultipleLogosContent.masthead.parent.logo = logo;
EsMultipleLogosContent.masthead.agency.logo = logo;
TaxpayerContent.masthead.parent.logo = logo;
EsTaxpayerContent.masthead.parent.logo = logo;

const Template = (args) => Component(args);

export const Default = () => <TestCase css={css} html={Template.bind({})(DefaultContent)} />;
export const DefaultSpanish = () => <TestCase css={css} html={Template.bind({})(EsContent)} />;
export const MultipleParentsAndLogos = () => <TestCase css={css} html={Template.bind({})(MultipleLogosContent)} />;
export const MultipleParentsAndLogosSpanish = () => <TestCase css={css} html={Template.bind({})(EsMultipleLogosContent)} />;
export const NoLogos = () => <TestCase css={css} html={Template.bind({})(NoLogosContent)} />;
export const NoLogosSpanish = () => <TestCase css={css} html={Template.bind({})(EsNoLogosContent)} />;
export const TaxpayerDisclaimer = () => <TestCase css={css} html={Template.bind({})(TaxpayerContent)} />;
export const TaxpayerDisclaimerSpanish = () => <TestCase css={css} html={Template.bind({})(EsTaxpayerContent)} />;
