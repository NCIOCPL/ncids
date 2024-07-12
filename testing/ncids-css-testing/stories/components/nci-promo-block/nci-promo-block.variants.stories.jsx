import React from 'react';
import Component from '@nciocpl/ncids-twig/components/nci-promo-block/nci-promo-block.twig';
import css from './index.scss';

import { TestCase } from '../../../components/test-case';
import { DefaultContentWithImage } from './content';

export default {
	title: 'Components/Promo Block/Variants',
	args: {},
};

const Template = (args) => Component(args);

export const WithImage = () => (
	<TestCase css={css} html={Template.bind({})(DefaultContentWithImage)} />
);
