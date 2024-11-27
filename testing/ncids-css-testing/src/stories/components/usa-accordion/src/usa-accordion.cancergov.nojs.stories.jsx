import Component from './twig-test-cases/usa-accordion_cancergov.twig';
import css from './index.scss?inline';

import { DefaultContent } from '@nciocpl/ncids-css/uswds-packages/usa-accordion/src/content';

export default {
	title: 'Components/Accordion/Test Cases/Cancer Gov',
	component: Component,
	parameters: { css },
};

export const NoJs = { args: { ...DefaultContent } };
