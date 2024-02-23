import React from 'react';
import Component from './twig-test-cases/usa-accordion_basichtml.twig';
import css from './index.scss';

import { TestCase } from '../../../../components/test-case';
import { DefaultContent } from '@nciocpl/ncids-css/uswds-packages/usa-accordion/src/content';

export default {
	title: 'Components/Accordion/Test Cases/Basic HTML',
};

const Template = () => Component();

export const NoJs = () => (
	<TestCase css={css} html={Template.bind({})(DefaultContent)} />
);

