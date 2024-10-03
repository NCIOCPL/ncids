import css from './landing-page.scss?inline';
import Component from '../template.twig';
import html from './main-content.js';

import { nciImgLogo } from '../nci-header-logo';
import { primaryNojs } from '../nci-header-primary';
import { secondary } from '../nci-header-secondary';

export default {
	title: 'templates/landing-page',
	component: Component,
	parameters: { css },
};

export const LandingPage = {
	args: {
		main_content: html,
		nci_img_logo: nciImgLogo,
		mega_menu: primaryNojs,
		secondary
	},
};

