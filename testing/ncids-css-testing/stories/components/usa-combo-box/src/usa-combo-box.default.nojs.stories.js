import Component from './content/form.twig';
import css from './index.scss';

import { TestCase } from '../../../../components/test-case';
import { DefaultContent } from './content';

export default {
	title: 'Components/Forms/Combo Box/Default/No JS',
};

const TestTemplate = (args) => Component(args);
export const Default = () => <TestCase css={css} html={TestTemplate.bind({})({ comboBoxData: DefaultContent })} />;
export const Disabled = () => <TestCase css={css} html={TestTemplate.bind({})({ comboBoxData: { ...DefaultContent, 'disabled': true }})} />;
export const Error = () => <TestCase css={css} html={TestTemplate.bind({})({ comboBoxData: { ...DefaultContent, 'error': true }})} />;
