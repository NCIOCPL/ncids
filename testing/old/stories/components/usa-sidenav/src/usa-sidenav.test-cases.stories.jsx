import React from 'react';
import Component from '@nciocpl/ncids-twig/components/usa-sidenav/usa-sidenav.twig';
import css from './index.scss';
import { LongContent, FullContent } from './content';


export default {
	title: 'components/usa-sidenav/Test Cases',
	component: Component,
	parameters: {css}
};

const Template = (args) => Component(args);

export const LongTitles = () => <TestCase css={css} html={Template.bind({})(LongContent)} />;
export const CancergovFull = () => <TestCase css={css} html={Template.bind({})(FullContent)} />;
