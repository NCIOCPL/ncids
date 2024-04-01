import React from 'react';
import Component from './twig-test-cases/usa-footer_backtotop.twig';
import css from './nci-big.scss';

import { TestCase } from '../../../components/test-case';
import { NciBigFooterContent } from './content';
import { NCIBigFooter } from '@nciocpl/ncids-js/usa-footer';

export default {
	title: 'Components/usa-footer/Test Cases',
	args: {
		ncidsInitJs: () => {
			const footer = document.querySelector('.usa-footer.usa-footer--nci-big');
			NCIBigFooter.create(footer);
		},
	},
};

const Template = (args) => Component(args);

export const NciBigBackToTop = () => (
	<TestCase css={css} html={Template.bind({})(NciBigFooterContent)} />
);
