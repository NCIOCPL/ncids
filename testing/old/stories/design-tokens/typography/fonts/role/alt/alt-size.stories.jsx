import React from 'react';
import typography from '../../fonts';
import css from '../../fonts.scss';

const family = 'alt';
const html = typography.generateSizesPage(family);

export const AltSizes = () => <TestCase css={css} html={html} />;
