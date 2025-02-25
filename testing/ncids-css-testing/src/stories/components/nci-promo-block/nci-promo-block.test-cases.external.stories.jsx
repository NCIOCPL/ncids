import Component from '@nciocpl/ncids-twig/components/nci-promo-block/nci-promo-block.twig';
import css from './index.scss?inline';

import {
	DefaultWithExternalLinkContent,
	DefaultWithInternalLink_ExternalOverrideContent,
	DefaultWithExternalLink_InternalOverrideContent
} from './content';

export default {
	title: 'Components/Promo Block/Test Cases/External Links/Light/Default',
	component: Component,
	parameters: { css },
};

export const ExternalLink = { args: DefaultWithExternalLinkContent };
export const InternalLinkOverridden = {
	args: DefaultWithInternalLink_ExternalOverrideContent,
};
export const ExternalLinkOverridden = {
	args: DefaultWithExternalLink_InternalOverrideContent,
};

