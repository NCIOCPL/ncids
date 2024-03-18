import Component from './usa-input-mask.twig';
import {
	SsnContent,
	PhoneContent,
	ZipContent,
	AlphanumericContent,
} from './content';
import css from './index.scss';

import { TestCase } from '../../../../components/test-case';
import { inputMask } from '@uswds/uswds/src/js/components';

export default {
	title: 'USWDS/Components/Form Inputs/Text Input Mask',
	args: {
		uswdsBehaviorJs: inputMask,
	},
};

const Template = (args) => Component(args);

export const SSN = () => <TestCase css={css} html={Template.bind({})(SsnContent)} />;
export const Phone = () => <TestCase css={css} html={Template.bind({})(PhoneContent)} />;
export const ZIP = () => <TestCase css={css} html={Template.bind({})(ZipContent)} />;
export const Alphanumeric = () => <TestCase css={css} html={Template.bind({})(AlphanumericContent)} />;
