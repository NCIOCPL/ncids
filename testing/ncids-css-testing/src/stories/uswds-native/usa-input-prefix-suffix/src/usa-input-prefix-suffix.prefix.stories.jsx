import css from './index.scss?inline';
import img from '@nciocpl/ncids-css/uswds-img/sprite.svg';
import html from './usa-input-prefix.twig?twig';

import * as inputPrefixSuffix from '@uswds/uswds/js/usa-date-picker';

const Component = () => {
	const replaced = html().replaceAll('./img/sprite.svg', img);
	return <div dangerouslySetInnerHTML={{ __html: replaced }}></div>;
};

export default {
	title: 'USWDS/Components/Form Inputs/Input Prefix or Suffix',
	component: Component,
	parameters: {
		uswdsBehaviorJs: inputPrefixSuffix,
		css,
	},
};

export const Prefix = {};
