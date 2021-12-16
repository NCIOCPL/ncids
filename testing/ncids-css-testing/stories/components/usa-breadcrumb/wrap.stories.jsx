import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from '!!raw-loader!sass-loader!./wrap.scss';

const html = `
<nav class="usa-breadcrumb usa-breadcrumb--wrap" aria-label="Breadcrumbs,,,">
  <ol class="usa-breadcrumb__list">
    <li class="usa-breadcrumb__list-item">
      <a href="#" class="usa-breadcrumb__link">
        <span>Home</span>
      </a>
    </li>
    <li class="usa-breadcrumb__list-item">
      <a href="#" class="usa-breadcrumb__link">
        <span>Federal Contracting</span>
      </a>
    </li>
    <li class="usa-breadcrumb__list-item">
      <a href="#" class="usa-breadcrumb__link">
        <span>Contracting assistance programs</span>
      </a>
    </li>
    <li class="usa-breadcrumb__list-item usa-current" aria-current="page">
      <span>Women-owned small business federal contracting program</span>
    </li>
  </ol>
</nav>
`;

export const Wrap = () => <TestCase css={css} html={html} />;
