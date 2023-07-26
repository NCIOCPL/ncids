import React from 'react';
import Component from './usa-character-count.twig';
import { TestCase } from '../../../../components/test-case';
import { characterCount } from '@uswds-js';
import css from './index.scss';

export default {
	title: 'USWDS/Components/Form Inputs/Character Count',
	args: {
		behavior: characterCount,
	},
};

const Template = (args) => Component(args);

export const CharacterCount = () => <TestCase css={css} html={Template.bind({})()} />;
