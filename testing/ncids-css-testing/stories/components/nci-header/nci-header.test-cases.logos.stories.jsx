import Component from '@nciocpl/ncids-twig/components/nci-header/nci-header.twig';
import css from './index.scss';

import { TestCase } from '../../../components/test-case';
import { DefaultContent } from './content';

export default {
	title: 'Components/Header/Test Cases/Default/Logos',
	args: {},
};

const Template = (args) => Component(args);

const cbiitContent = {
	...DefaultContent,
	logo: {
		label: 'CBIIT Homepage',
		href: 'javascript:void(0)',
		srcSet: './img/nci-header/logo_CBIIT.svg',
		imgSrc: './img/nci-header/logo_CBIIT_mobile.svg',
	},
};
export const CBIIT = () => (
	<TestCase css={css} html={Template.bind({})(cbiitContent)} />
);

const dcegContent = {
	...DefaultContent,
	logo: {
		label: 'DCEG Homepage',
		href: 'javascript:void(0)',
		srcSet: './img/nci-header/logo_DCEG.svg',
		imgSrc: './img/nci-header/logo_DCEG_mobile.svg',
	},
};
export const DCEG = () => (
	<TestCase css={css} html={Template.bind({})(dcegContent)} />
);

const dccpsContent = {
	...DefaultContent,
	logo: {
		label: 'DCCPS Homepage',
		href: 'javascript:void(0)',
		srcSet: './img/nci-header/logo_DCCPS.svg',
		imgSrc: './img/nci-header/logo_DCCPS_mobile.svg',
	},
};
export const DCCPS = () => (
	<TestCase css={css} html={Template.bind({})(dccpsContent)} />
);

const mypartContent = {
	...DefaultContent,
	logo: {
		label: 'MyPART Homepage',
		href: 'javascript:void(0)',
		srcSet: './img/nci-header/logo_MyPART.svg',
		imgSrc: './img/nci-header/logo_MyPart_mobile.svg',
	},
};
export const MyPART = () => (
	<TestCase css={css} html={Template.bind({})(mypartContent)} />
);
