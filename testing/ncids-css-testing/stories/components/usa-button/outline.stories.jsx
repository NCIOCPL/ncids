import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './usa-button.scss';

const html = `
<button class="usa-button usa-button--outline">Button</button>
<button class="usa-button usa-button--outline usa-button--hover">Hover</button>
<button class="usa-button usa-button--outline usa-button--active">Active</button>
<button class="usa-button usa-button--outline usa-focus">Focus</button>
<button class="usa-button usa-button--outline" disabled>Disabled</button>
`;

export const Outline = () => <TestCase css={css} html={html} />;
