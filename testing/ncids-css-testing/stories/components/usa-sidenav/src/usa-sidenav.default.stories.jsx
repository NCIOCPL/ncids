import React from 'react';
import Component from '@nciocpl/ncids-twig/components/usa-sidenav/usa-sidenav.twig';
import { TestCase } from '../../../../components/test-case';
import css from './index.scss';
import { DefaultContent } from './content';


export default {
	title: 'components/usa-sidenav',
	argTypes: {},
};

const Template = (args) => Component(args);

export const Default = () => <TestCase css={css} html={Template.bind({})(DefaultContent)} />;
