import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './usa-button.scss';

const html = `
<button class="usa-button usa-button--accent-warm">Button</button>
<button class="usa-button usa-button--accent-warm usa-button--hover">Hover</button>
<button class="usa-button usa-button--accent-warm usa-button--active">Active</button>
<button class="usa-button usa-button--accent-warm usa-focus">Focus</button>
<button class="usa-button usa-button--accent-warm" disabled>Disabled</button>
`;

export const AccentWarm = () => <TestCase css={css} html={html} />;
