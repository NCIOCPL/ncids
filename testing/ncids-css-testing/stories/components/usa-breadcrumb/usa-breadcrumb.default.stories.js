import React from 'react';

import DefaultComponent from './usa-breadcrumb--default.twig';
import { TestCase } from '../../../components/test-case';
import css from './breadcrumb.scss';

export default {
	title: 'Components/Breadcrumb/Default',
};

export const Default = () => <TestCase css={css} html={DefaultComponent.bind({})()} />;
