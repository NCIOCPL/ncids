import Component from './content/two-modals-one-shadow.twig';
import css from './index.scss?inline';

import { USAModal } from '@nciocpl/ncids-js/usa-modal';
const NcidsContent = {
	modal01: {
		trigger: {
			text: 'Open Shadow Modal',
		},
	},
	modal02: {
		trigger: {
			text: 'Open Modal Without Shadow',
		},
	},
};

// Create the shadow DOM container and style for the modal
const shadowRoot = document.createElement('div').attachShadow({ mode: 'open' });
const styleTag = document.createElement('style');
styleTag.textContent = css;
shadowRoot.appendChild(styleTag);

const shadowConfig = {
	id: 'modal-shadow',
	modifier: '',
	title: 'shadow example',
	shadow: shadowRoot,
};

const shadowContent = {
	title: 'Modal Shadow Example',
	content: 'This modal should be attached to the shadow DOM of the body.',
};

const modalConfig = {
	id: 'modal-no-shadow',
	modifier: '',
	title: 'modal example without shadow',
};

const modalContent = {
	title: 'Modal Example (No Shadow)',
	content: 'This modal should be attached to the body.',
};

export default {
	title: 'Components/Modal/Variants',
	component: Component,
	parameters: {
		ncidsInitJs: () => {
			const noShadowButton = document.querySelector('[data-async-modal="456"]');
			const modal = USAModal.createConfig(modalConfig);
			modal.updateDialog(modalContent);
			noShadowButton.addEventListener(
				'click',
				(e) => modal2.handleModalOpen(e),
				false
			);
			const shadowButton = document.querySelector('[data-async-modal="123"]');
			const shadowModal = USAModal.createConfig(shadowConfig);
			shadowModal.updateDialog(shadowContent);
			shadowButton.addEventListener(
				'click',
				(e) => modal.handleModalOpen(e),
				false
			);
		},
		css,
	},
};

export const ConfigShadow = { args: NcidsContent };
