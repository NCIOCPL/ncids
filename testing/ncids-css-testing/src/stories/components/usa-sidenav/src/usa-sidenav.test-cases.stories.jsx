import Component from '@nciocpl/ncids-twig/components/usa-sidenav/usa-sidenav.twig';
import css from './index.scss?inline';
import { LongContent, FullContent } from './content';

export default {
	title: 'Components/Sidenav/Test Cases',
	component: Component,
	parameters: { css },
};

export const LongTitles = { args: LongContent };
export const CancergovFull = { args: FullContent };
