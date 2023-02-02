import React from 'react';
import { TestCase } from '../../../../../../components/test-case';
import typography from '../../fonts';
import css from '../../fonts.scss';

const family = 'mono';
const html = typography.generateSizesPage(family);

export const MonoSizes = () => <TestCase css={css} html={html} />;
