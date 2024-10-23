import Component from './usa-input-mask.twig';
import {
	SsnContent,
	PhoneContent,
	ZipContent,
	AlphanumericContent,
} from './content';
import css from './index.scss?inline';

import * as inputMask from '@uswds/uswds/js/usa-input-mask';

export default {
	title: 'USWDS/Components/Form Inputs/Text Input Mask',
	component: Component,
	parameters: {
		uswdsBehaviorJs: inputMask,
		css,
	},
};

export const SSN = { args: SsnContent };
export const Phone = { args: PhoneContent };
export const ZIP = { args: ZipContent };
export const Alphanumeric = { args: AlphanumericContent };
