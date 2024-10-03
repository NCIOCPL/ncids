import React from 'react';
import Component from '@nciocpl/ncids-twig/components/nci-promo-block/nci-promo-block.twig';
import css from './index.scss';

import { DefaultContent } from './content';

export default {
	title: 'Components/Promo Block/Default',
	parameters: {css}
};

const Template = (args) => Component(args);

export const Default = () => (
	<TestCase css={css} html={Template.bind({})(DefaultContent)} />
);
