import Component from './content/blank-modal.twig';
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
			const modal = USAModal.create(modalElement);
			modal.updateDialog(modalConfig);
		},
		css,
	},
};

export const CustomCallback = { args: NcidsContent };
