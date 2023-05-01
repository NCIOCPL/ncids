import Component from './usa-combo-box.twig';
import Content from './usa-combo-box.json';
import css from './index.scss';

import { TestCase } from '../../../../components/test-case';
import { comboBox } from '@uswds-js';

export default {
	title: 'USWDS/Components/Form Inputs/Combo Box',
    args: {
        behavior: comboBox,
    },
};

const Template = (args) => Component(args);

export const Default = () => <TestCase css={css} html={Template.bind({})(Content)} />;
