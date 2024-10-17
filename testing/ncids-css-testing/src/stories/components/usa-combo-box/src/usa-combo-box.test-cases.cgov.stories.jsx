import Component from './content/cgov.twig';
import css from './cgov.scss?inline';

import { USAComboBox } from '@nciocpl/ncids-js/usa-combo-box';
import { CGovContent } from './content/index.js';

export default {
	title: 'Components/Forms/Combo Box/Test Cases/Cgov',
	component: Component,
	parameters: {
		ncidsInitJs: () => USAComboBox.createAll(),
		css,
	},
};

export const CancerTypes = { args: { comboBoxData: CGovContent } };
export const CancerTypesError = { args: { comboBoxData: { ...CGovContent, 'error': true } } };
