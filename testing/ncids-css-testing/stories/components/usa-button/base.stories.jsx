import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './usa-button.scss';

const html = `
<button class="usa-button usa-button--base">Button</button>
<button class="usa-button usa-button--base usa-button--hover">Hover</button>
<button class="usa-button usa-button--base usa-button--active">Active</button>
<button class="usa-button usa-button--base usa-focus">Focus</button>
<button class="usa-button usa-button--base" disabled>Disabled</button>
`;

export const Base = () => <TestCase css={css} html={html} />;
