import Component from './twig-test-cases/usa-accordion_accordionize.twig';
import css from './index.scss?inline';

import { DefaultContent } from '@nciocpl/ncids-css/uswds-packages/usa-accordion/src/content';
import { USAAccordion } from '@nciocpl/ncids-js/usa-accordion';

export default {
	title: 'Components/Accordion/Test Cases/Cancer Gov',
	component: Component,
	parameters: {
		ncidsInitJs: () => {
			let accordionInstance = null;

			const articleBody = document.querySelector(
				'.cgdp-article-body--multiple'
			);
			window.addEventListener('resize', () => {
				if (window.innerWidth < 640 && articleBody) {
					if (accordionInstance !== null) return;

					articleBody.classList.add('usa-accordion');
					accordionInstance = USAAccordion.create(articleBody, {
						allowMultipleOpen: true,
						openSections: [],
						headerSelector: '.cgdp-article-body__heading',
					});
				} else {
					if (accordionInstance !== null) {
						accordionInstance.unregister();
						accordionInstance = null;
						articleBody.classList.remove('usa-accordion');
					}
				}
			});
		},
		css,
	},
};

export const Accordionize = { args: { ...DefaultContent } };
