import Component from '@nciocpl/ncids-css/uswds-packages/usa-combo-box/src/usa-combo-box.twig';
import Content from '@nciocpl/ncids-css/uswds-packages/usa-combo-box/src/usa-combo-box.json';
import css from './index.scss?inline';

import * as comboBox from '@uswds/uswds/js/usa-combo-box';

export default {
	title: 'USWDS/Components/Form Inputs/Combo Box',
	component: Component,
	parameters: {
		uswdsBehaviorJs: comboBox,
		css,
	},
};

export const Default = { args: Content };
