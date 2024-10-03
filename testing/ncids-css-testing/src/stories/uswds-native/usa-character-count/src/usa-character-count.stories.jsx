import Component from './usa-character-count.twig';
import * as characterCount from '@uswds/uswds/js/usa-character-count';
import css from './index.scss?inline';

export default {
	title: 'USWDS/Components/Form Inputs/Character Count',
	component: Component,
	parameters: {
		uswdsBehaviorJs: characterCount,
		css
	},
};

export const CharacterCount = {};
