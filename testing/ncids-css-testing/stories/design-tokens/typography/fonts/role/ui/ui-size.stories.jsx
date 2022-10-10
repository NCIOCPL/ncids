import React from 'react';
import { TestCase } from '../../../../../../components/test-case';
import typography from '../../fonts';
import css from '../../fonts.scss';

const family = 'ui';
const html = typography.generateSizesPage(family);

export const UiSizes = () => <TestCase css={css} html={html} />;
