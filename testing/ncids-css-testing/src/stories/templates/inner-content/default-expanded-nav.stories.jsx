import css from './inner-content.scss?inline';
import Component from '../template-sidenav.twig';
import html from './main-content.js';

import { nciImgLogo } from '../nci-header-logo';
import { primaryActiveMega } from '../nci-header-primary';
import { secondary } from '../nci-header-secondary';

export default {
	title: 'templates/inner-content',
	component: Component,
	parameters: { css },
};

export const InnerContentWithExpandedMegaMenu = {
	args: {
		main_content: html,
		nci_img_logo: nciImgLogo,
		mega_menu: primaryActiveMega,
		secondary,
	},
};
