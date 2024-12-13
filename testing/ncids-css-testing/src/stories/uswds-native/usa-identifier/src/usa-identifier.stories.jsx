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
import css from './index.scss?inline';

export default {
  title: 'USWDS/Components/Identifier',
	component: Component,
	parameters: { css },
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

export const Default = { args: DefaultContent};
export const DefaultSpanish = { args: EsContent};
export const MultipleParentsAndLogos = { args: MultipleLogosContent};
export const MultipleParentsAndLogosSpanish = { args: EsMultipleLogosContent};
export const NoLogos = { args: NoLogosContent};
export const NoLogosSpanish = { args: EsNoLogosContent};
export const TaxpayerDisclaimer = { args: TaxpayerContent};
export const TaxpayerDisclaimerSpanish = { args: EsTaxpayerContent};
