import Component from './usa-range.twig';
import css from './index.scss';
import { TestCase } from '../../../../components/test-case';

export default {
	title: 'USWDS/Components/Form Inputs/Range',
};

const Template = (args) => Component(args);
export const Range = () => <TestCase css={css} html={Template.bind({})()} />;
