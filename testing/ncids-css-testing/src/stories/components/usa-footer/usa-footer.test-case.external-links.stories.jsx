import Component from '@nciocpl/ncids-twig/components/usa-footer/usa-footer.twig';
import css from './index.scss?inline';

import { NciBigFooterContentExternalLinks } from './content/index.js';
import { NCIBigFooter } from '@nciocpl/ncids-js/usa-footer';

export default {
	title: 'Components/Footer/Test Cases',
	component: Component,
	parameters: {
		ncidsInitJs: () => {
			const footer = document.querySelector('.usa-footer.usa-footer--nci-big');
			return NCIBigFooter.create(footer, {
				backToTopText: null,
			});
		},
		css,
	},
};

export const WithExternalLinks = { args: NciBigFooterContentExternalLinks };
