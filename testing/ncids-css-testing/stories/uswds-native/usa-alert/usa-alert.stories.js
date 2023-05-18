import React from 'react';
import { TestCase } from '../../../components/test-case';
import Component from './usa-alert.twig';
import css from './index.scss';

import {
	DefaultContent,
	EmergencyContent,
	ErrorContent,
	InfoContent,
	NoHeaderContent,
	NoIconContent,
	SlimContent,
	SuccessContent,
	WarningContent,
} from './content';

export default {
	title: 'USWDS/Components/Alert',
};

const Template = (args) => Component(args);

export const Default = () => <TestCase css={css} html={Template.bind({})(DefaultContent)} />;
export const Emergency = () => <TestCase css={css} html={Template.bind({})(EmergencyContent)} />;
export const Error = () => <TestCase css={css} html={Template.bind({})(ErrorContent)} />;
export const Info = () => <TestCase css={css} html={Template.bind({})(InfoContent)} />;
export const NoHeader = () => <TestCase css={css} html={Template.bind({})(NoHeaderContent)} />;
export const NoIcon = () => <TestCase css={css} html={Template.bind({})(NoIconContent)} />;
export const Slim = () => <TestCase css={css} html={Template.bind({})(SlimContent)} />;
export const Success = () => <TestCase css={css} html={Template.bind({})(SuccessContent)} />;
export const Warning = () => <TestCase css={css} html={Template.bind({})(WarningContent)} />;


