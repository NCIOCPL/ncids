import Component from './content/back-to-top.twig';
import css from './index.scss?inline';

import { NciBigFooterContent } from './content/index.js';
import { NCIBigFooter } from '@nciocpl/ncids-js/usa-footer';

export default {
	title: 'Components/Footer/Test Cases',
	component: Component,
	parameters: {
		ncidsInitJs: () => {
			const footer = document.querySelector('.usa-footer.usa-footer--nci-big');
			const element = NCIBigFooter.create(footer, {
				backToTopText: document.documentElement.lang === 'es' ? 'Volver Arriba' : 'Back To Top',
			});
			return element;
		},
		css,
	},
};

export const BackToTop = { args: NciBigFooterContent };
