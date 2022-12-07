import React from 'react';
import { TestCase } from '../../../../../../components/test-case';
import typography from '../../fonts';
import css from '../../fonts.scss';

const family = 'mono';
const html = typography.generateWeightsPage(family);

export const MonoWeight = () => <TestCase css={css} html={html} />;
