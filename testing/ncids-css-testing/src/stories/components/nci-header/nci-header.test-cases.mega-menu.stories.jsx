import Component from '@nciocpl/ncids-twig/components/nci-header/nci-header.twig';
import css from './index.scss?inline';

import { NCIExtendedHeaderWithMegaMenu } from '@nciocpl/ncids-js/nci-header';
import { MockMegaMenuAdapter } from './mock-adapters/MockMegaMenuAdapter';
import { MockMobileMenuAdapter } from './mock-adapters/MockMobileMenuAdapter';
import {
	ExtendedLongMegaMenuContent,
	LongExtendedButtonContent,
} from './content';

export default {
	title: 'Components/Header/Test Cases/Header with Mega Menu',
	component: Component,
	parameters: {
		ncidsInitJs: () => {
			const header = document.querySelector('.nci-header');
			NCIExtendedHeaderWithMegaMenu.create(header, {
				megaMenuSource: new MockMegaMenuAdapter(),
				mobileMenuSource: new MockMobileMenuAdapter(false),
			});
		},
		css,
	},
};

export const LongPrimaryButton = { args: LongExtendedButtonContent };
export const LongMegaMenuContent = { args: ExtendedLongMegaMenuContent };
