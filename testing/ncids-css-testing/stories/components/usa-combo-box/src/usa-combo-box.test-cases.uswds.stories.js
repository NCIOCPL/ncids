import Component from '@nciocpl/ncids-css/uswds-packages/usa-combo-box/src/usa-combo-box.twig';
import css from './cgov.scss';

import { USAComboBox } from '@nciocpl/ncids-js/usa-combo-box';
import { TestCase } from '../../../../components/test-case';
import Content from '@nciocpl/ncids-css/uswds-packages/usa-combo-box/src/usa-combo-box.json';

export default {
	title: 'Components/Forms/Combo Box/Test Cases/USWDS',
	args: {
		ncidsInitJs: () => USAComboBox.createAll(),
	},
};

const TestTemplate = (args) => Component(args);

export const Default = () => <TestCase css={css} html={TestTemplate.bind({})(Content)} />;
