import Component from './content/cgov.twig';
import css from './cgov.scss';

import { USAComboBox } from '@nciocpl/ncids-js/usa-combo-box';
import { CGovContent } from './content';

export default {
	title: 'Components/Forms/Combo Box/Test Cases/Cgov',
	parameters: {
		ncidsInitJs: () => USAComboBox.createAll(),
		css
	},
};

export const CancerTypes = () => <TestCase css={css} html={TestTemplate.bind({})({ comboBoxData: CGovContent })} />;
export const CancerTypesError = () => <TestCase css={css} html={TestTemplate.bind({})({ comboBoxData: { ...CGovContent, 'error': true }})} />;
