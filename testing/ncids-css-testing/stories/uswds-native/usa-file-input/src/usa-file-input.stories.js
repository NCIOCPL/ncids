import React from 'react';
import Component from './usa-file-input.twig';
import {
	DefaultContent,
	DisabledContent,
	ErrorContent,
	MultipleContent,
	SpecificContent,
	WildcardContent,
} from './content';
import { TestCase } from '../../../../components/test-case';
import { fileInput } from '@uswds-js';
import css from './index.scss';

export default {
	title: 'USWDS/Components/Form Input/File Input',
	args: {
		behavior: fileInput,
	},
};

const Template = (args) => Component(args);

export const Input = () => <TestCase css={css} html={Template.bind({})(DefaultContent)} />;

export const Disabled = () => <TestCase css={css} html={Template.bind({})(DisabledContent)} />;

export const Error = () => <TestCase css={css} html={Template.bind({})(ErrorContent)} />;

export const Multiple = () => <TestCase css={css} html={Template.bind({})(MultipleContent)} />;

export const Specific = () => <TestCase css={css} html={Template.bind({})(SpecificContent)} />;

export const Wildcard = () => <TestCase css={css} html={Template.bind({})(WildcardContent)} />;
