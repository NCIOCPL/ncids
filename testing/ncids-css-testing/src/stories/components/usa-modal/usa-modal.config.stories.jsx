import Component from './content/blank-modal.twig';
import css from './index.scss?inline';

import { USAModal } from '@nciocpl/ncids-js/usa-modal';
import { NcidsContent } from './content/index.js';

const modalConfig = {
	modalId: NcidsContent.id,
	title: 'Are you sure you want to continue?',
	content: 'You have unsaved changes that will be lost.',
	footer: [
		{
			label: 'Continue without saving',
			style: 'usa-button--outline',
			closeModal: true,
			cbfunction: () => {
				alert('this is 1 callback');
			},
		},
		{
			label: 'Go Back',
			style: '',
			closeModal: true,
			cbfunction: () => {
				alert('this is 2 callback');
			},
		},
	],
};

export default {
	title: 'Components/Modal/NCIDS',
	component: Component,
	parameters: {
		ncidsInitJs: () => {
			USAModal.create(modalConfig);
		},
		css,
	},
};

export const ConfigInit = { args: NcidsContent };
