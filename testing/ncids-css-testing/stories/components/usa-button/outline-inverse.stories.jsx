import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './usa-button.scss';

const html = `
<button class="usa-button usa-button--outline usa-button--inverse">Button</button>
<button class="usa-button usa-button--outline usa-button--inverse usa-button--hover">Hover</button>
<button class="usa-button usa-button--outline usa-button--inverse usa-button--active">Active</button>
<button class="usa-button usa-button--outline usa-button--inverse usa-focus">Focus</button>
<button class="usa-button usa-button--outline usa-button--inverse" disabled>Disabled</button>
`;

export const OutlineInverse = () => <TestCase css={css} html={html} />;
