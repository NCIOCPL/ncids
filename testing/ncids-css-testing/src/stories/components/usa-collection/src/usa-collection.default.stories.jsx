import Component from '@nciocpl/ncids-twig/components/usa-collection/usa-collection.twig';
import { DefaultContent, MediaContent, CalendarContent } from './content/index.js';
import css from './index.scss?inline';

export default {
	title: 'Components/Collection/Default',
	component: Component,
	parameters: { css },
};

export const Default = { args: DefaultContent };
export const Media = { args: MediaContent };
export const Calendar = {args: CalendarContent};
