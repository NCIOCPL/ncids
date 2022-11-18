import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './usa-button.scss';

const html = `
<div>
<button class="usa-button usa-button--icon">Button</button>
<button class="usa-button usa-button--icon usa-button--hover">Hover</button>
<button class="usa-button usa-button--icon usa-button--active">Active</button>
<button class="usa-button usa-button--icon usa-focus">Focus</button>
<button class="usa-button usa-button--icon" disabled>Disabled</button>
<br/><br/>
<button class="usa-button usa-button--icon">Button</button>
<button class="usa-button usa-button--icon usa-button--hover">Hover</button>
<button class="usa-button usa-button--icon usa-button--active">Active</button>
<button class="usa-button usa-button--icon usa-focus">Focus</button>
<button class="usa-button usa-button--icon" disabled>Disabled</button>

<div>
`;

export const IconButton = () => <TestCase css={css} html={html} />;
