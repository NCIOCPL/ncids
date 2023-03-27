import React from 'react';
import { TestCase } from '../../../components/test-case';
import Component from '@nciocpl/ncids-twig/components/usa-banner/usa-banner.twig';
import css from './nci-banner.scss';

export default {
	title: "components/usa-banner",
	argTypes: {},
};

const Template = (args) => Component(args);

export const NCIBanner = () => <TestCase css={css} html={Template.bind({})(
	{
		language: 'en'
	}
)} />;

export const NCIBannerWithLanguageToggle = () => <TestCase css={css} html={Template.bind({})(
	{
		language: 'en',
		language_toggle_href: 'javascript:void(0);'
	}
)} />;

export const SpanishNCIBannerWithLanguageToggle = () => <TestCase css={css} html={Template.bind({})(
	{
		language: 'es',
		language_toggle_href: 'javascript:void(0);'
	}
)} />;
