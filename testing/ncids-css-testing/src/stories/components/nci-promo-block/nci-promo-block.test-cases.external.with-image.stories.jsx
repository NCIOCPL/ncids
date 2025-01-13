import Component from '@nciocpl/ncids-twig/components/nci-promo-block/nci-promo-block.twig';
import css from './index.scss?inline';

import {
	WithImageWithExternalLinkContent,
	WithImageWithInternalLink_ExternalOverrideContent,
	WithImageWithExternalLink_InternalOverrideContent
} from './content';

export default {
	title: 'Components/Promo Block/Test Cases/External Links/Light/With Image',
	component: Component,
	parameters: { css },
};

export const ExternalLink = { args: WithImageWithExternalLinkContent };
export const InternalLinkOverridden = {
	args: WithImageWithInternalLink_ExternalOverrideContent,
};
export const ExternalLinkOverridden = {
	args: WithImageWithExternalLink_InternalOverrideContent,
};

