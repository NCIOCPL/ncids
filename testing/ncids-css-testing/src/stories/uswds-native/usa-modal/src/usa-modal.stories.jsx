import Component from './usa-modal.twig';
import { DefaultContent, ForcedActionContent, LargeContent } from './content';
import css from './index.scss?inline';

import * as modal from '@uswds/uswds/js/usa-modal';

export default {
	title: 'USWDS/Components/Modal',
	component: Component,
	parameters: {
		uswdsBehaviorJs: modal,
		css,
	},
};

export const Default = { args: DefaultContent};
export const ForcedAction = { args: ForcedActionContent};
export const Large = { args: LargeContent};
