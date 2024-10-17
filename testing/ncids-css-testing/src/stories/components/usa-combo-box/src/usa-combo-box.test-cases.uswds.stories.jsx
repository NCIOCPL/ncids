import Component from '@nciocpl/ncids-css/uswds-packages/usa-combo-box/src/usa-combo-box.twig';
import css from './cgov.scss?inline';

import { USAComboBox } from '@nciocpl/ncids-js/usa-combo-box';
import Content from '@nciocpl/ncids-css/uswds-packages/usa-combo-box/src/usa-combo-box.json';

export default {
	title: 'Components/Forms/Combo Box/Test Cases/USWDS',
	component: Component,
	parameters: {
		ncidsInitJs: () => USAComboBox.createAll(),
		css,
	},
};

export const Default = { args: Content };
