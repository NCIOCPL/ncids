import Component from './content/cgov.twig';
import css from './cgov.scss';

import { USAComboBox } from '@nciocpl/ncids-js/usa-combo-box';
import { TestCase } from '../../../../components/test-case';
import { CGovContent } from './content';

export default {
	title: 'Components/Forms/Combo Box/Test Cases',
	args: {
		ncidsInitJs: () => USAComboBox.createAll(),
	},
};

const TestTemplate = (args) => Component(args);

export const CgovInput = () => <TestCase css={css} html={TestTemplate.bind({})(CGovContent)} />;
export const CgovInputError = () => <TestCase css={css} html={TestTemplate.bind({})({
	...CGovContent,
	'error': true,
})} />;
