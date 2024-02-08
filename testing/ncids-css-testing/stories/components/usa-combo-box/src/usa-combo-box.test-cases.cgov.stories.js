import Component from './content/cgov.twig';
import css from './cgov.scss';

import { USAComboBox } from '@nciocpl/ncids-js/usa-combo-box';
import { TestCase } from '../../../../components/test-case';
import { CGovContent } from './content';

export default {
	title: 'Components/Forms/Combo Box/Test Cases/Cgov',
	args: {
		ncidsInitJs: () => USAComboBox.createAll(),
	},
};

const TestTemplate = (args) => Component(args);
export const CancerTypes = () => <TestCase css={css} html={TestTemplate.bind({})({ comboBoxData: CGovContent })} />;
export const CancerTypesError = () => <TestCase css={css} html={TestTemplate.bind({})({ comboBoxData: { ...CGovContent, 'error': true }})} />;
