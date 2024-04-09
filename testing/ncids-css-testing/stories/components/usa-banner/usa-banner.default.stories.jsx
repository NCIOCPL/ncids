import React from 'react';
import { TestCase } from '../../../components/test-case';
import Component from '@nciocpl/ncids-twig/components/usa-banner/usa-banner.twig';
import css from './banner.scss';

export default {
	title: "components/Banner/Default",
	argTypes: {},
};

const Template = (args) => Component(args);

export const NCIBannerWithoutLanguageToggle = () => <TestCase css={css} html={Template.bind({})(
	{
		language: 'en'
	}
)} />;

export const SpanishNCIBannerWithoutLanguageToggle = () => <TestCase css={css} html={Template.bind({})(
	{
		language: 'es'
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
