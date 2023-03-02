import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from "./usa-identifier.twig";
import {
  DefaultContent,
  EsContent,
  MultipleLogosContent,
  EsMultipleLogosContent,
  NoLogosContent,
  EsNoLogosContent,
  TaxpayerContent,
  EsTaxpayerContent,
} from "./content";
import css from './index.scss';

export default {
  title: "USWDS/Components/Identifier",
};

const Template = (args) => Component(args);

export const Default = () => <TestCase css={css} html={Template.bind({})(DefaultContent)} />;

export const DefaultSpanish = () => <TestCase css={css} html={Template.bind({})(EsContent)} />;

export const MultipleParentsAndLogos = () => <TestCase css={css} html={Template.bind({})(MultipleLogosContent)} />;

export const MultipleParentsAndLogosSpanish = () => <TestCase css={css} html={Template.bind({})(EsMultipleLogosContent)} />;

export const NoLogos = () => <TestCase css={css} html={Template.bind({})(NoLogosContent)} />;

export const NoLogosSpanish = () => <TestCase css={css} html={Template.bind({})(EsNoLogosContent)} />;

export const TaxpayerDisclaimer = () => <TestCase css={css} html={Template.bind({})(TaxpayerContent)} />;

export const TaxpayerDisclaimerSpanish = () => <TestCase css={css} html={Template.bind({})(EsTaxpayerContent)} />;
