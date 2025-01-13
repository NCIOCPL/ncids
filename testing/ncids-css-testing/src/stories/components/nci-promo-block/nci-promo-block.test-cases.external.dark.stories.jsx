import Component from '@nciocpl/ncids-twig/components/nci-promo-block/nci-promo-block.twig';
import css from './index.scss?inline';

import {
	DarkWithExternalLinkContent,
	DarkWithInternalLink_ExternalOverrideContent,
	DarkWithExternalLink_InternalOverrideContent
} from './content';

export default {
	title: 'Components/Promo Block/Test Cases/External Links/Dark/Default',
	component: Component,
	parameters: { css },
};

export const ExternalLink = { args: DarkWithExternalLinkContent };
export const InternalLinkOverridden = {
	args: DarkWithInternalLink_ExternalOverrideContent,
};
export const ExternalLinkOverridden = {
	args: DarkWithExternalLink_InternalOverrideContent,
};

