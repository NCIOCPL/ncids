import Component from './content/multi-modal.twig';
import css from './index.scss?inline';

import { USAModal } from '@nciocpl/ncids-js/usa-modal';
import { NcidsContent } from './content/index.js';

const modalConfig = {
	title: 'Are you sure you want to continue?',
	content: 'You have unsaved changes that will be lost.',
	footer: [
		{
			label: 'Continue without saving',
			style: '',
			closeModal: true,
		},
		{
			label: 'Go Back',
			style: 'usa-button--unstyled',
			closeModal: true,
		},
	],
};
const modalConfigAlt = {
	title: 'Second Modal Save Now?',
	content: 'More information would be listed here.',
	footer: [
		{
			label: 'Close Second Modal',
			style: '',
			closeModal: true,
		},
		{
			label: 'Go Back',
			style: 'usa-button--unstyled',
			closeModal: true,
		},
	],
};
export default {
	title: 'Components/Modal/Test Cases',
	component: Component,
	parameters: {
		ncidsInitJs: () => {
			const modalElements = Array.from(
				document.querySelectorAll('[data-async-modal]')
			);
			modalElements.map((dom, index) => {
				const modal = USAModal.create(dom);
				modal.updateDialog(index % 2 == 0 ? modalConfig : modalConfigAlt);
			});
		},
		css,
	},
};

export const MultipleModals = { args: NcidsContent };
