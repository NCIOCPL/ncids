import Component from './usa-file-input.twig';
import {
	DefaultContent,
	DisabledContent,
	ErrorContent,
	MultipleContent,
	SpecificContent,
	WildcardContent,
} from './content';
import css from './index.scss?inline';
import * as fileInput from '@uswds/uswds/js/usa-file-input';

export default {
	title: 'USWDS/Components/Form Inputs/File Input',
	component: Component,
	parameters: {
		uswdsBehaviorJs: fileInput,
		css
	},
};

export const Input = { args: DefaultContent};
export const Disabled = { args: DisabledContent};
export const Error = { args: ErrorContent};
export const Multiple = { args: MultipleContent};
export const Specific = { args: SpecificContent};
export const Wildcard = { args: WildcardContent};
