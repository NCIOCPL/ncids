import React from 'react';
import Component from '@nciocpl/ncids-twig/components/usa-footer/usa-footer.twig';
import css from './nci-big.scss';

import { TestCase } from '../../../components/test-case';
import { NciBigFooterContent } from './content';

export default {
	title: 'Components/usa-footer/Test Cases',
	args: {},
};

const Template = (args) => Component(args);

export const NciBigNoJS = () => (
	<TestCase css={css} html={Template.bind({})(NciBigFooterContent)} />
);
