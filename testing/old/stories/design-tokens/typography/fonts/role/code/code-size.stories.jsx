import React from 'react';
import typography from '../../fonts';
import css from '../../fonts.scss';

const family = 'code';
const html = typography.generateSizesPage(family);

export const CodeSizes = () => <TestCase css={css} html={html} />;
