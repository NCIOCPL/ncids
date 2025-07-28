import Component from './content/blank-modal.twig';
import css from './index.scss?inline';

import { USAModal } from '@nciocpl/ncids-js/usa-modal';
const NcidsContent = {
	modal01: {
		trigger: {
			text: 'Open Large Modal',
		},
	},
};

const modalConfig = {
	id: 'modal-callback',
	forced: false,
	modifier: 'usa-modal--lg',
	title: 'some example',
};

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

export default {
	title: 'Components/Modal/Modifiers',
	component: Component,
	parameters: {
		ncidsInitJs: () => {
			const modalElement = document.querySelector('[data-async-modal]');
			const modal = USAModal.createConfig(modalConfig);
			modal.updateDialog(modalContent);
			modalElement.addEventListener(
				'click',
				(e) => modal.handleModalOpen(e),
				false
			);
		},
		css,
	},
};

export const ConfigLarge = { args: NcidsContent };
