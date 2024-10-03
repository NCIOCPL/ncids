import Component from './content/form.twig';
import css from './index.scss';

import { USAComboBox } from '@nciocpl/ncids-js/usa-combo-box';
import { DefaultContent } from './content';

export default {
	title: 'Components/Forms/Combo Box/Default/Default',
	parameters: {
		ncidsInitJs: () => USAComboBox.createAll(),
		css
	},
};

export const Default = () => <TestCase css={css} html={TestTemplate.bind({})({ comboBoxData: DefaultContent })} />;
export const Disabled = () => <TestCase css={css} html={TestTemplate.bind({})({ comboBoxData: { ...DefaultContent, 'disabled': true }})} />;
export const Error = () => <TestCase css={css} html={TestTemplate.bind({})({ comboBoxData: { ...DefaultContent, 'error': true }})} />;
