import Component from '@nciocpl/ncids-twig/components/nci-promo-block/nci-promo-block.twig';
import css from './index.scss?inline';

import {
	DarkWithImageWithExternalLinkContent,
	DarkWithImageWithInternalLink_ExternalOverrideContent,
	DarkWithImageWithExternalLink_InternalOverrideContent
} from './content';

export default {
	title: 'Components/Promo Block/Test Cases/External Links/Dark/With Image',
	component: Component,
	parameters: { css },
};

export const ExternalLink = { args: DarkWithImageWithExternalLinkContent };
export const InternalLinkOverridden = {
	args: DarkWithImageWithInternalLink_ExternalOverrideContent,
};
export const ExternalLinkOverridden = {
	args: DarkWithImageWithExternalLink_InternalOverrideContent,
};

