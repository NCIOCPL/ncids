import Component from '@nciocpl/ncids-twig/components/usa-collection/usa-collection.twig';
import css from './index.scss?inline';
import img from '@nciocpl/ncids-css/uswds-img/sprite.svg';

import {
	DefaultExternalContent,
	MediaExternalContent,
	CondensedExternalContent,
	CalendarExternalContent,
} from './content';

export default {
	title: 'Components/Collection/Test Cases',
	component: Component,
	parameters: { css },
};

export const DefaultWithExternalLink = {
	args: { ...DefaultExternalContent, img },
};
export const MediaWithExternalLink = { args: { ...MediaExternalContent, img } };
export const CondensedWithExternalLink = {
	args: { ...CondensedExternalContent, img },
};
export const CalendarWithExternalLink = {
	args: { ...CalendarExternalContent, img },
};
