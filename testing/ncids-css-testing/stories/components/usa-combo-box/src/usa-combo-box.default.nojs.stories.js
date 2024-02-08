import Component from './content/form.twig';
import css from './index.scss';

import { TestCase } from '../../../../components/test-case';
import { DefaultContent, DisabledContent } from './content';

export default {
	title: 'Components/Forms/Combo Box/Default',
};

const TestTemplate = (args) => Component(args);

export const NoJS = () => <TestCase css={css} html={TestTemplate.bind({})(DefaultContent)} />;
