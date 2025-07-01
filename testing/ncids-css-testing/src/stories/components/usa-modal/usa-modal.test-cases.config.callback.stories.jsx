import Component from './content/blank-modal.twig';
import css from './index.scss?inline';

import { USAModal } from '@nciocpl/ncids-js/usa-modal';

const NcidsContent = {
	modal01: {
		trigger: {
			text: 'Open Callback Modal',
		},
	},
};

const modalConfig = {
	id: 'modal-callback',
	forced: false,
	modifier: 'usa-modal--nci-maxh',
	title: 'some example',
};

const modalContent = {
	title: 'Modal Callback Example',
	content: 'Click button below to see callback.',
	footer: [
		{
			label: 'Continue without saving',
			style: '',
			closeModal: true,
			cbfunction: () => {
				alert('this is 1 callback');
			},
		},
		{
			label: 'Go Back',
			style: 'usa-button--unstyled',
			closeModal: true,
			cbfunction: () => {
				alert('this is 2 callback');
			},
		},
	],
};

export default {
	title: 'Components/Modal/Test Cases',
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

export const ConfigCustomCallback = { args: NcidsContent };
