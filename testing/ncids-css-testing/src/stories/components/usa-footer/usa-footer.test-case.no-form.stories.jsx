import Component from '@nciocpl/ncids-twig/components/usa-footer/usa-footer.twig';
import css from './index.scss?inline';

import { NciBigFooterContentNoForm } from './content';
import { NCIBigFooter } from '@nciocpl/ncids-js/usa-footer';

export default {
	title: 'Components/Footer/Test Cases',
	component: Component,
	parameters: {
		css,
		ncidsInitJs: () => {
			const footer = document.querySelector('.usa-footer.usa-footer--nci-big');
			return NCIBigFooter.create(footer, {
				backToTopText: null,
			});
		},
	},
};


export const NoForm = { args: NciBigFooterContentNoForm };
