import React from 'react';
import Component from '@nciocpl/ncids-twig/components/nci-promo-block/nci-promo-block.twig';
import css from './index.scss';

import { TestCase } from '../../../components/test-case';
import { DefaultNoDescriptionContent, DefaultWithImageNoDescriptionContent } from './content';

export default {
	title: 'Components/Promo Block/Test Cases',
	args: {},
};

const Template = (args) => Component(args);

export const DefaultNoDescription = () => (
	<TestCase css={css} html={Template.bind({})(DefaultNoDescriptionContent)} />
);

export const DefaultWithImageNoDescription = () => (
	<TestCase css={css} html={Template.bind({})(DefaultWithImageNoDescriptionContent)} />
);
