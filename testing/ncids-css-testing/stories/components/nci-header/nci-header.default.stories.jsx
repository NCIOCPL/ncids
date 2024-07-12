import React from 'react';
import Component from '@nciocpl/ncids-twig/components/nci-header/nci-header.twig';
import css from './index.scss';

import { TestCase } from '../../../components/test-case';
import { NCIExtendedHeaderWithMegaMenu } from '@nciocpl/ncids-js/nci-header';
import { MockMegaMenuAdapter } from './mock-adapters/MockMegaMenuAdapter';
import { MockMobileMenuAdapter } from './mock-adapters/MockMobileMenuAdapter';
import { DefaultContent, DefaultSpanishContent } from './content';

export default {
	title: 'Components/Header/Default',
	args: {
		ncidsInitJs: () => {
			const header = document.querySelector('.nci-header');
			NCIExtendedHeaderWithMegaMenu.create(header, {
				megaMenuSource: new MockMegaMenuAdapter(),
				mobileMenuSource: new MockMobileMenuAdapter(false),
			});
		},
	},
};

const Template = (args) => Component(args);

export const English = () => (
	<TestCase css={css} html={Template.bind({})(DefaultContent)} />
);

export const Spanish = () => (
	<TestCase css={css} html={Template.bind({})(DefaultSpanishContent)} />
);
