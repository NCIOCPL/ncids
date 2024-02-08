import Component from './content/form.twig';
import css from './index.scss';

import { USAComboBox } from '@nciocpl/ncids-js/usa-combo-box';
import { TestCase } from '../../../../components/test-case';
import { DefaultContent, DisabledContent } from './content';

export default {
	title: 'Components/Forms/Combo Box/Default',
	args: {
		ncidsInitJs: () => USAComboBox.createAll(),
	},
};

const TestTemplate = (args) => Component(args);

export const Default = () => <TestCase css={css} html={TestTemplate.bind({})(DefaultContent)} />;
export const Disabled = () => <TestCase css={css} html={TestTemplate.bind({})(DisabledContent)} />;
export const Error = () => <TestCase css={css} html={TestTemplate.bind({})({ ...DefaultContent, 'error': true })} />;
