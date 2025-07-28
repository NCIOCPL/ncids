import Component from './content/blank-modal.twig';
import css from './index.scss?inline';

import { USAModal } from '@nciocpl/ncids-js/usa-modal';
const NcidsContent = {
	modal01: {
		trigger: {
			text: 'Open Forced Action Modal',
		},
	},
};

const modalConfig = {
	id: 'modal-forced-action',
	forced: true,
	modifier: '',
	title: 'some example',
};

const modalContent = {
	title: 'Modal Forced Action Example',
	content: 'You can only close from the buttons below.',
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
	title: 'Components/Modal/Variants',
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

export const ConfigForcedAction = { args: NcidsContent };
