import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from '!!raw-loader!sass-loader!./usa-button.scss';

const html = `
<button class="usa-button usa-button--unstyled">Button</button>
<button class="usa-button usa-button--unstyled usa-button--hover">Hover</button>
<button class="usa-button usa-button--unstyled usa-button--active">Active</button>
<button class="usa-button usa-button--unstyled usa-focus">Focus</button>
<button class="usa-button usa-button--unstyled" disabled>Disabled</button>
`;

export const Unstyled = () => <TestCase css={css} html={html} />;
