import Component from './usa-alert.twig';
import css from './index.scss?inline';

import {
	DefaultContent,
	EmergencyContent,
	ErrorContent,
	InfoContent,
	NoHeaderContent,
	NoIconContent,
	SlimContent,
	SuccessContent,
	WarningContent,
} from './content';

export default {
	title: 'USWDS/Components/Alert',
	component: Component,
	parameters: { css },
};

export const Default = { args: DefaultContent };
export const Emergency = { args: EmergencyContent };
export const Error = { args: ErrorContent };
export const Info = { args: InfoContent };
export const NoHeader = { args: NoHeaderContent };
export const NoIcon = { args: NoIconContent };
export const Slim = { args: SlimContent };
export const Success = { args: SuccessContent };
export const Warning = { args: WarningContent };


