import Component from './content.twig';
import css from './ncids-utilities.scss?inline';

// Tests that the utilities work using the `ncids` package import.
// This is not the recommended way to use components; however, we need to test that they work.
export default {
	title: 'design-tokens/NCIDS Utilities',
	component: Component,
	parameters: {css}
};

export const NCIDSUtilities = {};
