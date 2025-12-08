import Component from './twig-test-cases/usa-accordion_nonest.twig';
import css from './index.scss?inline';

import { DefaultContent } from '@nciocpl/ncids-css/uswds-packages/usa-accordion/src/content';
import { USAAccordion } from '@nciocpl/ncids-js/usa-accordion';

export default {
	title: 'Components/Accordion/Test Cases/Header Bug Cgov',
	component: Component,
	parameters: {
		ncidsInitJs: () => {
			let accordionInstance = null;

			const articleBody = document.querySelector('.cgdp-article-body--multiple');
			window.addEventListener('resize', () => {
				if (window.innerWidth < 640 && articleBody) {
					if (accordionInstance !== null) return;

					articleBody.classList.add('usa-accordion');
					accordionInstance = USAAccordion.create(articleBody, {
						allowMultipleOpen: true,
						openSections: [],
						allowNesting: false,
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

export const NoNesting = { args: { ...DefaultContent } };
