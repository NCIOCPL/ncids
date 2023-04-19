
import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from './usa-tooltip.twig';
import UtilityComponent from './usa-tooltip--utilities.twig';
import { tooltip } from '@uswds-js';
import css from './index.scss';

export default {
	title: 'USWDS/Components/Tooltip',
	args: {
		behavior: tooltip,
	},
};

const Template = (args) => Component(args);
const UtilityTemplate = (args) => UtilityComponent(args);

export const Default = () => <TestCase css={css} html={Template.bind({})()} />;

export const Utility = () => <TestCase css={css} html={UtilityTemplate.bind({})()} />;
