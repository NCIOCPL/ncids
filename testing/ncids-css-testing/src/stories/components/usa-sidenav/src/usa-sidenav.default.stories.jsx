import Component from '@nciocpl/ncids-twig/components/usa-sidenav/usa-sidenav.twig';
import css from './index.scss?inline';
import { DefaultContent } from './content';

export default {
	title: 'Components/Sidenav',
	component: Component,
	parameters: { css },
};

export const Default = { args: DefaultContent };
