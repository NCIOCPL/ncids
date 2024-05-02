import React from 'react';
import Component from '@nciocpl/ncids-twig/components/nci-header/nci-header.twig';
import css from './nci-header.scss';

import { TestCase } from '../../../components/test-case';
import { NCIExtendedHeaderWithMegaMenu } from '@nciocpl/ncids-js/nci-header';
import { MockMegaMenuAdapter } from './mock-adapters/MockMegaMenuAdapter';
import { MockMobileMenuAdapter } from './mock-adapters/MockMobileMenuAdapter';
import {
	DefaultContent,
	ExtendedLongMegaMenuContent,
	LongExtendedButtonContent,
} from './content';

export default {
	title: 'Components/Header/Test Cases/Header with Mega Menu',
	args: {
		ncidsInitJs: () => {
			const header = document.querySelector('.nci-header');
			NCIExtendedHeaderWithMegaMenu.create(header, {
				megaMenuSource: new MockMegaMenuAdapter(),
				mobileMenuSource: new MockMobileMenuAdapter(false),
			});
		},
	},
    nojsArgs:{

    },
};

const Template = (args) => Component(args);

const NoJSTemplate = (nojsArgs) => Component(nojsArgs);

export const NoJS = () => (
	<TestCase css={css} html={NoJSTemplate.bind({})(DefaultContent)} />
);

export const LongPrimaryButton = () => (
	<TestCase css={css} html={Template.bind({})(LongExtendedButtonContent)} />
);

export const LongMegaMenuContent = () => (
	<TestCase css={css} html={Template.bind({})(ExtendedLongMegaMenuContent)} />
);

