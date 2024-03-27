import Component from '@nciocpl/ncids-css/uswds-packages/usa-combo-box/src/usa-combo-box.twig';
import Content from '@nciocpl/ncids-css/uswds-packages/usa-combo-box/src/usa-combo-box.json';
import css from './index.scss';

import { TestCase } from '../../../../components/test-case';
import { comboBox } from '@uswds/uswds/src/js/components';

export default {
	title: 'USWDS/Components/Form Inputs/Combo Box',
    args: {
        uswdsBehaviorJs: comboBox,
    },
};

const Template = (args) => Component(args);

export const Default = () => <TestCase css={css} html={Template.bind({})(Content)} />;
