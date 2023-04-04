import React from 'react';
import { TestCase } from '../../../components/test-case';
import Component from '@nciocpl/ncids-twig/components/usa-list/usa-list.twig';
import css from './usa-list.scss';

export default {
	title: 'components/usa-list',
	argTypes: {},
};

const Template = (args) => Component(args);

export const Ordered = () => <TestCase css={css} html={Template.bind({})({ element: 'ol' })} />;
export const Unordered = () => <TestCase css={css} html={Template.bind({})({ element: 'ul' })} />;
export const Unstyled = () => <TestCase css={css} html={Template.bind({})({
	element: 'ul',
	classes: 'usa-list--unstyled',
})} />;
