import css from './microsite-home.scss?inline';
import Component from '../template.twig';

import { nciImgLogo } from '../nci-header-logo';
import { primaryNojs } from '../nci-header-primary';
import { secondary } from '../nci-header-secondary';
import html from './main-content.js';

export default {
	title: 'templates/microsite-home',
	component: Component,
	parameters: { css },
};

export const MicrositeHome = {
	args: {
		main_content: html,
		nci_img_logo: nciImgLogo,
		mega_menu: primaryNojs,
		secondary
	},
};

