import Component from '@nciocpl/ncids-twig/components/nci-header/nci-header.twig';
import css from './index.scss?inline';

import { DefaultContent } from './content';

export default {
	title: 'Components/Header/Test Cases/Default/Logos',
	component: Component,
	parameters: { css },
};

const cbiitContent = {
	...DefaultContent,
	logo: {
		label: 'CBIIT Homepage',
		href: 'javascript:void(0)',
		srcSet: './img/nci-header/logo_CBIIT.svg',
		imgSrc: './img/nci-header/logo_CBIIT_mobile.svg',
	},
};
export const CBIIT = { args: cbiitContent };

const dcegContent = {
	...DefaultContent,
	logo: {
		label: 'DCEG Homepage',
		href: 'javascript:void(0)',
		srcSet: './img/nci-header/logo_DCEG.svg',
		imgSrc: './img/nci-header/logo_DCEG_mobile.svg',
	},
};
export const DCEG = { args: dcegContent };

const dccpsContent = {
	...DefaultContent,
	logo: {
		label: 'DCCPS Homepage',
		href: 'javascript:void(0)',
		srcSet: './img/nci-header/logo_DCCPS.svg',
		imgSrc: './img/nci-header/logo_DCCPS_mobile.svg',
	},
};
export const DCCPS = { args: dccpsContent };

const mypartContent = {
	...DefaultContent,
	logo: {
		label: 'MyPART Homepage',
		href: 'javascript:void(0)',
		srcSet: './img/nci-header/logo_MyPART.svg',
		imgSrc: './img/nci-header/logo_MyPart_mobile.svg',
	},
};
export const MyPART = { args: mypartContent };
