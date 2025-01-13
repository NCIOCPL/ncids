import Component from '@nciocpl/ncids-twig/components/nci-promo-block/nci-promo-block.twig';
import css from './index.scss?inline';

import {
	DarkAlternatingRightWithExternalLinkContent,
	DarkAlternatingRightWithExternalLink_InternalOverrideContent,
	DarkAlternatingRightWithInternalLink_ExternalOverrideContent
} from './content';

export default {
	title: 'Components/Promo Block/Test Cases/External Links/Dark/Alternating Image Right',
	component: Component,
	parameters: { css },
};

export const ExternalLink = { args: DarkAlternatingRightWithExternalLinkContent };
export const InternalLinkOverridden = {
	args: DarkAlternatingRightWithInternalLink_ExternalOverrideContent,
};
export const ExternalLinkOverridden = {
	args: DarkAlternatingRightWithExternalLink_InternalOverrideContent,
};

