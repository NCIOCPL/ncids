import React from 'react';
import WrapComponent from './usa-breadcrumb--wrap.twig';
import { TestCase } from '../../../components/test-case';
import css from './breadcrumb.scss';

export default {
	title: 'Components/Breadcrumb/Variants',
};


export const Wrap = () => <TestCase css={css} html={WrapComponent.bind({})()} />;
