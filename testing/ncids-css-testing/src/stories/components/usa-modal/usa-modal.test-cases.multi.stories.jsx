import Component from './content/multi-modal.twig';
import css from './index.scss?inline';

import { USAModal } from '@nciocpl/ncids-js/usa-modal';

const NcidsContent = {
	modal01: {
		trigger: {
			text: 'Open First Modal',
		},
	},
	modal02: {
		trigger: {
			text: 'Open Second Modal',
		},
	},
};
const modalConfig = [
	{
		id: 'modal-first',
		forced: false,
		title: 'some example',
	},
	{
		id: 'modal-second',
		forced: false,
		title: 'some example',
	},
];

const modalContent = {
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
const modalContentAlt = {
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
			modalConfig.map((config, index) => {
				const modal = USAModal.createConfig(config);
				modal.updateDialog(index % 2 == 0 ? modalContent : modalContentAlt);
				modalElements[index].addEventListener(
					'click',
					(e) => modal.handleModalOpen(e),
					false
				);
			});
		},
		css,
	},
};

export const ConfigMultipleModals = { args: NcidsContent };
