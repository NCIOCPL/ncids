import React from 'react';
import { TestCase } from '../../../components/test-case';
import Component from '@nciocpl/ncids-twig/components/nci-cta-strip/nci-cta-strip.twig';
import css from './nci-cta-strip.scss';

export default {
	title: 'components/CTA Strip/Test Cases',
	argTypes: {},
};

const Template = (args) => Component(args);

export const DefaultLong = () => <TestCase css={css} html={Template.bind({})(
	{
	"items": [
		{
			"title": "NCI Alliance for Nanotechnology in Cancer",
			"url": "http://www.cancer.gov",
		},
		{
			"title": "Nanotechnology Characterization Laboratory",
			"url": "http://www.google.com",
		},
		{
			"title": "Cancer Nanotechnology Plan",
			"url": "http://www.msn.com",
		},
	]},
)} />;

export const DefaultSpanish = () => <TestCase css={css} html={Template.bind({})(
	{
	"items": [
		{
			"title": "El NCI para la Nanotecnología en el Cáncer",
			"url": "http://www.cancer.gov",
		},
		{
			"title": "Laboratorio de Caracterización de Nanotecnología",
			"url": "http://www.google.com",
		},
		{
			"title": "Plan de Nanotecnología del Cáncer",
			"url": "http://www.msn.com",
		},
	]},
)} />;
