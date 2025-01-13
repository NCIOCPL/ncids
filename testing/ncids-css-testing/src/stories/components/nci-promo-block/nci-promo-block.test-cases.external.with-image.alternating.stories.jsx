import Component from '@nciocpl/ncids-twig/components/nci-promo-block/nci-promo-block.twig';
import css from './index.scss?inline';

import {
	AlternatingRightWithExternalLinkContent,
	AlternatingRightWithExternalLink_InternalOverrideContent,
	AlternatingRightWithInternalLink_ExternalOverrideContent
} from './content';

export default {
	title: 'Components/Promo Block/Test Cases/External Links/Light/Alternating Image Right',
	component: Component,
	parameters: { css },
};

export const ExternalLink = { args: AlternatingRightWithExternalLinkContent };
export const InternalLinkOverridden = {
	args: AlternatingRightWithInternalLink_ExternalOverrideContent,
};
export const ExternalLinkOverridden = {
	args: AlternatingRightWithExternalLink_InternalOverrideContent,
};

