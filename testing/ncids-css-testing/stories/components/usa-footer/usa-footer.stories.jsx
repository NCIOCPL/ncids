import React from 'react';
import { TestCase } from '../../../components/test-case';
import Component from '@ncids-templates/components/usa-footer/usa-footer--big.twig';
import { DefaultContentBig, DefaultContentBigEs } from './content';
import css from './nci-big.scss';

export default {
	title: 'components/usa-footer',
	argTypes: {},
};

const Template = (args) => Component(args);

export const NCIBigDefault = () => <TestCase css={css} html={Template.bind({})(DefaultContentBig)} />;
export const NCIBigDefaultEs = () => <TestCase css={css} html={Template.bind({})(DefaultContentBigEs)} />;
export const NCIBigBackToTop = () => <TestCase css={css} html={Template.bind({})(
	{
		should_mimic_rtt_js: true,
		...DefaultContentBig
	}
)} />;
export const NCIBigBackToTopEs = () => <TestCase css={css} html={Template.bind({})(
	{
		should_mimic_rtt_js: true,
		...DefaultContentBigEs
	}
)} />;
