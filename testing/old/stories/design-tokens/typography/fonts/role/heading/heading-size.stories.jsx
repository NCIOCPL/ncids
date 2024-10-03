import React from 'react';
import typography from '../../fonts';
import css from '../../fonts.scss';

const family = 'heading';
const html = typography.generateSizesPage(family);

export const HeadingSizes = () => <TestCase css={css} html={html} />;
