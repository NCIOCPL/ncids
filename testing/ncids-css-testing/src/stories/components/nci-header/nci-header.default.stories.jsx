import Component from '@nciocpl/ncids-twig/components/nci-header/nci-header.twig';
import css from './index.scss?inline';

import { NCIExtendedHeaderWithMegaMenu } from '@nciocpl/ncids-js/nci-header';
import { MockMegaMenuAdapter } from './mock-adapters/MockMegaMenuAdapter';
import { MockMobileMenuAdapter } from './mock-adapters/MockMobileMenuAdapter';
import { DefaultContent, DefaultSpanishContent } from './content';

export default {
	title: 'Components/Header/Default',
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

export const English = { args: DefaultContent };
export const Spanish = { args: DefaultSpanishContent };
