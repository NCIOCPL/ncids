import Component from './summary-box-with-content.twig';
import { TestCase } from '../../../../components/test-case';
import css from './index.scss';

export default {
	title: 'Components/Summary Box/Test Cases',
};

const Template = (args) => Component(args);

export const SummaryBoxRow = () => <TestCase css={css} html={Template.bind({})()} />;
