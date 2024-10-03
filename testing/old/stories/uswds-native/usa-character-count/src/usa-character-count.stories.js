import React from 'react';
import Component from './usa-character-count.twig';
import { characterCount } from '@uswds/uswds/src/js/components';
import css from './index.scss';

export default {
	title: 'USWDS/Components/Form Inputs/Character Count',
	parameters: {
		uswdsBehaviorJs: characterCount,
		css
	},
};

const Template = (args) => Component(args);

export const CharacterCount = () => <TestCase css={css} html={Template.bind({})()} />;
