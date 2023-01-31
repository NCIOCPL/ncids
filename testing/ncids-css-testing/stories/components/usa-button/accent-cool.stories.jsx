import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './usa-button.scss';

const html = `
<button class="usa-button usa-button--accent-cool">Button</button>
<button class="usa-button usa-button--accent-cool usa-button--hover">Hover</button>
<button class="usa-button usa-button--accent-cool usa-button--active">Active</button>
<button class="usa-button usa-button--accent-cool usa-focus">Focus</button>
<button class="usa-button usa-button--accent-cool" disabled>Disabled</button>
`;

export const AccentCool = () => <TestCase css={css} html={html} />;
