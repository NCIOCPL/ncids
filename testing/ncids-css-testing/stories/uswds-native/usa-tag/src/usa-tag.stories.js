import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from './usa-tag.twig';
import css from './index.scss';
import { DefaultContent, BigContent } from './content';

export default {
	title: 'USWDS/Components/Tags',
};

const Template = (args) => Component(args);

export const Default = () => <TestCase css={css} html={Template.bind({})(DefaultContent)}/>;

export const Big = () => <TestCase css={css} html={Template.bind({})(BigContent)}/>;
