import css from './cgov-home.scss?inline';
import Component from '../template.twig';
import html from './main-content.js';

import { nciImgLogo } from '../nci-header-logo.js';
import { primaryNojs } from '../nci-header-primary.js';
import { secondary } from '../nci-header-secondary.js';

export default {
	title: 'templates/cgov-home',
	component: Component,
	parameters: { css },
};

export const CgovHome = {
	args: {
		main_content: html,
		nci_img_logo: nciImgLogo,
		mega_menu: primaryNojs,
		secondary
	},
};


