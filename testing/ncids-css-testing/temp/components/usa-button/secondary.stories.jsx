import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './usa-button.scss';

const html = `
<button class="usa-button usa-button--secondary">Button</button>
<button class="usa-button usa-button--secondary usa-button--hover">Hover</button>
<button class="usa-button usa-button--secondary usa-button--active">Active</button>
<button class="usa-button usa-button--secondary usa-focus">Focus</button>
<button class="usa-button usa-button--secondary" disabled>Disabled</button>
`;

export const Secondary = () => <TestCase css={css} html={html} />;
