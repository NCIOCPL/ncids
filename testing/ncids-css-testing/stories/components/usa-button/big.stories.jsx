import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './usa-button.scss';

const html = `
<button class="usa-button usa-button--big">Button</button>
<button class="usa-button usa-button--big usa-button--hover">Hover</button>
<button class="usa-button usa-button--big usa-button--active">Active</button>
<button class="usa-button usa-button--big usa-focus">Focus</button>
<button class="usa-button usa-button--big" disabled>Disabled</button>
`;

export const Big = () => <TestCase css={css} html={html} />;
