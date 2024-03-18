import prefix from './usa-input-prefix.twig';
import suffix from './usa-input-suffix.twig';
import css from './index.scss';
import img from '@nciocpl/ncids-css/uswds-img/sprite.svg';

import { TestCase } from '../../../../components/test-case';
import { inputPrefixSuffix } from '@uswds/uswds/src/js/components';

export default {
	title: 'USWDS/Components/Form Inputs/Input Prefix or Suffix',
	args: {
		uswdsBehaviorJs: inputPrefixSuffix,
	},
};

const PrefixTemplate = (args) => prefix(args);
const SuffixTemplate = (args) => suffix(args);

const prefixHtml = PrefixTemplate.bind({})().replaceAll('./img/sprite.svg', img);

export const Prefix = () => <TestCase css={css} html={prefixHtml} />;
export const Suffix = () => <TestCase css={css} html={SuffixTemplate.bind({})()} />;
