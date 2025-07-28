import Component from './content/blank-modal.twig';
import css from './index.scss?inline';

import { USAModal } from '@nciocpl/ncids-js/usa-modal';
const NcidsContent = {
	modal01: {
		trigger: {
			text: 'Open Max Height Modal',
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
	title: 'Are you sure you want to continue?',
	content:
		'Aliquam consectetur nisi non massa feugiat, imperdiet ornare libero ultrices. Nullam tincidunt mattis lobortis. Mauris hendrerit lectus vel ipsum facilisis feugiat. Sed viverra ex ac gravida commodo. Vestibulum semper commodo turpis, non pulvinar risus bibendum eu. Curabitur bibendum, ex non vehicula tristique, neque neque gravida risus, ac faucibus nulla lectus efficitur ante. Nam et lorem nunc. Ut elementum scelerisque ornare. Vivamus at vestibulum nulla. Nam sit amet quam dolor. Cras malesuada est nibh, ac varius magna vehicula eget. Aliquam consectetur nisi non massa feugiat, imperdiet ornare libero ultrices. Nullam tincidunt mattis lobortis. Mauris hendrerit lectus vel ipsum facilisis feugiat. Sed viverra ex ac gravida commodo. Etiam semper leo enim, a iaculis magna elementum non. Praesent posuere aliquet libero, nec vestibulum lacus rhoncus sit amet. Pellentesque sit amet tristique quam.',
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

export const ConfigMaxHeight = { args: NcidsContent };
