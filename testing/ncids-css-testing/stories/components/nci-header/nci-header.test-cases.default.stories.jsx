import Component from '@nciocpl/ncids-twig/components/nci-header/nci-header.twig';
import css from './index.scss';

import { TestCase } from '../../../components/test-case';
import { NCIExtendedHeaderWithMegaMenu } from '@nciocpl/ncids-js/nci-header';
import { MockMegaMenuAdapter } from './mock-adapters/MockMegaMenuAdapter';
import { MockMobileMenuAdapter } from './mock-adapters/MockMobileMenuAdapter';
import {
	DefaultContent,
	LongExtendedLinkContent,
	ExtendedContentTwoItems,
	ExtendedContentManyItems,
} from './content';

export default {
	title: 'Components/Header/Test Cases/Default',
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

export const NoSearchField = () => (
	<TestCase css={css} html={Template.bind({})({
		...DefaultContent,
		search_enabled: false,
	})} />
);

export const LongPrimaryLink = () => (
	<TestCase css={css} html={Template.bind({})(LongExtendedLinkContent)} />
);

export const TwoItemNavigation = () => (
	<TestCase css={css} html={Template.bind({})(ExtendedContentTwoItems)} />
);

export const TooManyItemsNavigation = () => (
	<TestCase css={css} html={Template.bind({})(ExtendedContentManyItems)} />
);
