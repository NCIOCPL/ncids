import React from 'react';
import Test from '@nciocpl/ncids-twig/components/usa-collection/usa-collection.twig';
import { DefaultContent, MediaContent, CalendarContent } from './content';

import { TestCase } from '../../../../components/test-case';
import css from './index.scss';

export default {
	title: 'Components/Collection/Default',
};

const TestTemplate = (args) => Test(args);

export const Default = () => <TestCase css={css} html={TestTemplate.bind({})(DefaultContent)} />;

export const Media = () => <TestCase css={css} html={TestTemplate.bind({})(MediaContent)} />;

export const Calendar = () => <TestCase css={css} html={TestTemplate.bind({})(CalendarContent)} />;
