import Component from './content/form.twig';
import css from './index.scss?inline';

import { DefaultContent } from './content/index.js';

export default {
	title: 'Components/Forms/Combo Box/Default/No JS',
	component: Component,
	parameters: { css },
};

export const Default = { args: { comboBoxData: DefaultContent } };
export const Disabled = { args: { comboBoxData: { ...DefaultContent, 'disabled': true } } };
export const Error = { args: { comboBoxData: { ...DefaultContent, 'error': true } } };

