import Component from './content/contentbehind-modal.twig';
import css from './index.scss?inline';

import { USAModal } from '@nciocpl/ncids-js/usa-modal';

const NcidsContent = {
	modal01: {
		trigger: {
			text: 'Open No Footer Modal',
		},
	},
};

const modalConfig = {
	id: 'modal-custom-html',
	forced: false,
	modifier: '',
	title: 'some example',
};

const modalContent = {
	title: "No Footer Here",
	content:
		'<p>You have unsaved <a href=#>changes</a> that will be lost.</p><p>something else here.</p>'
};

const footerContent = [
		{
			label: 'Continue without saving',
			style: '',
			closeModal: true,
		},
		{
			label: 'Go Back',
			style: 'usa-button--outline',
			closeModal: true,
		},
	];

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

export const NoFooter = { args: NcidsContent };
