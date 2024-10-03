import React from 'react';
import typography from '../../fonts';
import css from '../../fonts.scss';

const family = 'body';
const html = typography.generateSizesPage(family);

export const BodySizes = () => <TestCase css={css} html={html} />;
