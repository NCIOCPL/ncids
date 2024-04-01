import React from 'react';
import Component from '@nciocpl/ncids-twig/components/usa-footer/usa-footer.twig';
import css from './nci-big.scss';

import { TestCase } from '../../../components/test-case';
import { NciBigFooterContent, NciBigFooterContentSpanish } from './content';
import { NCIBigFooter } from '@nciocpl/ncids-js/usa-footer';

export default {
	title: 'Components/usa-footer/Variants',
	args: {
		ncidsInitJs: () => {
			const footer = document.querySelector('.usa-footer.usa-footer--nci-big');
			NCIBigFooter.create(footer);
		},
	},
	// args: () => NCIBigFooter.autoInit()
};

const Template = (args) => Component(args);

export const NciBig = () => (
	<TestCase css={css} html={Template.bind({})(NciBigFooterContent)} />
);

export const NciBigSpanish = () => (
	<TestCase css={css} html={Template.bind({})(NciBigFooterContentSpanish)} />
);
