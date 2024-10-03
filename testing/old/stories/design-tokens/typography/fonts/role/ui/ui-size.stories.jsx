import React from 'react';
import typography from '../../fonts';
import css from '../../fonts.scss';

const family = 'ui';
const html = typography.generateSizesPage(family);

export const UiSizes = () => <TestCase css={css} html={html} />;
