import React from 'react';
import { TestCase } from '../../../../../../components/test-case';
import typography from '../../fonts';
import css from '../../fonts.scss';

const family = 'serif';
const html = typography.generateSizesPage(family);

export const SerifSizes = () => <TestCase css={css} html={html} />;
