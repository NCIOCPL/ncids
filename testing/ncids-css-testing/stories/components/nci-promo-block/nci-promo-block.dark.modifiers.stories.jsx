import React from 'react';
import Component from '@nciocpl/ncids-twig/components/nci-promo-block/nci-promo-block.twig';
import css from './index.scss';

import { TestCase } from '../../../components/test-case';
import { DarkContent, DarkContentWithImage } from './content';

export default {
	title: 'Components/Promo Block/Modifiers/Dark Theme',
	args: {},
};

const Template = (args) => Component(args);

export const Default = () => (
	<TestCase css={css} html={Template.bind({})(DarkContent)} />
);

export const WithImage = () => (
	<TestCase css={css} html={Template.bind({})(DarkContentWithImage)} />
);
