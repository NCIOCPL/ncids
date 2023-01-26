import React from 'react';
import { TestCase } from '../../../../../../components/test-case';
import typography from '../../fonts';
import css from '../../fonts.scss';

const family = 'sans';
const html = typography.generateWeightsPage(family);

export const SansWeight = () => <TestCase css={css} html={html} />;
